var eventList = []
var cancelledEvents = {}

function Event (start, event) {
    if (!(start instanceof Date)) {
        start = start.toJSDate()
    }
    this.start = start
    this.event = event
    this.end = new Date(this.start.getTime() + this.event.duration.toSeconds()*1000)
    this.summary = event.summary || 'No title'
    this.description = event.description
    this.location = event.location || false

    this.lasts_several_days = this.start.toDateString() !== this.end.toDateString()
}

Event.prototype.isCancelled = function () {
    if (cancelledEvents[this.event.uid] instanceof Array
        && cancelledEvents[this.event.uid].includes(this.start.getTime())) return true
    return false
}

Event.prototype.toHTML = function () {
    var br = document.createElement('br')

    var div_cal = document.createElement('div')
    div_cal.setAttribute('class', 'cal_entry')

    var div_datetime = document.createElement('div')
    div_datetime.setAttribute('class', 'cal_datetime')

    var span_date = document.createElement('span')
    span_date.setAttribute('class', 'cal_date')
    span_date.appendChild(document.createTextNode(this.start.toLocaleDateString([], {year: 'numeric', month: '2-digit', day: '2-digit'})))
    div_datetime.appendChild(span_date)

    if (this.lasts_several_days) {
        var span_end_date = document.createElement('span')
        span_end_date.setAttribute('class', 'cal_date')
        span_end_date.appendChild(document.createTextNode(' - ' + this.end.toLocaleString([], {year: 'numeric', month: '2-digit', day: '2-digit'})))
        div_datetime.appendChild(span_end_date)
    } else {
        var span_day = document.createElement('span')
        span_day.setAttribute('class', 'cal_day')
        span_day.appendChild((document.createTextNode(this.start.toLocaleDateString([], {weekday: 'long'}))))
        div_datetime.appendChild(span_day)
    }

    var span_time = document.createElement('span')
    span_time.setAttribute('class', 'cal_time')
    span_time.appendChild(document.createTextNode(this.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})))
    div_datetime.appendChild(span_time)

    var span_summary = document.createElement('span')
    span_summary.setAttribute('class', 'cal_summary')
    span_summary.appendChild(document.createTextNode(this.summary))

    var div_description = document.createElement('div')
    div_description.setAttribute('class', 'cal_descriptionbox')
    div_description.appendChild(span_summary)

    if (this.location !== false && !/w(ilhelminenstra(ss|ß)e )17/i.test(this.location)) {
        var span_location = document.createElement('span')
        span_location.setAttribute('class', 'cal_location')

        var span_location_icon = document.createElement('i')
        span_location_icon.setAttribute('class', 'fa fa-map-marker')
        span_location_icon.setAttribute('aria-hidden', 'true')

        span_location.appendChild(span_location_icon)

        if (this.location.match(/tb(a|d)/i)) {
            span_location.appendChild(document.createTextNode(this.location))
        } else {
            var a_location_osm = document.createElement('a')
            a_location_osm.setAttribute('href', 'https://www.openstreetmap.org/search?query=' + encodeURI(this.location))
            a_location_osm.appendChild(document.createTextNode(this.location))
            span_location.appendChild(a_location_osm)
        }

        div_description.appendChild(span_location)
    }

    div_cal.appendChild(div_datetime)
    div_cal.appendChild(div_description)

    if (this.description !== null) {
        var parts = this.description.split(/\r\n|\r|\n/)

        parts.map(function (i) {
            var span_description = document.createElement('span')
            span_description.setAttribute('class', 'cal_description')

            words = i.split(' ')

            words.forEach(function(word) {
                if (word.match(/(ht|f)tps?\:\/\//i)) {
                    var a = document.createElement('a')
                    a.setAttribute('href', word)
                    a.appendChild(document.createTextNode(word))
                    span_description.appendChild(a)
                } else {
                    span_description.appendChild(document.createTextNode(word))
                }
                span_description.appendChild(document.createTextNode(' '))
            })

            div_description.appendChild(span_description)
        })
    }

    if (this.isCancelled()) {
        div_cal.style.textDecoration = 'line-through'
    }

    return div_cal
}

function parseIcalData(data) {
    var timeRangeStart = new Date()
    var timeRangeStop = new Date()
    timeRangeStart.setHours(0, 0, 0)
    timeRangeStop.setMonth(timeRangeStop.getMonth() + 1)

    var jcalData = ICAL.parse(data)
    var vcalendar = new ICAL.Component(jcalData)
    var events = vcalendar.getAllSubcomponents('vevent')

    events.map(function (e) {
        var event = new ICAL.Event(e)

        if (event.isRecurring()) {
            var expand = event.iterator()
            var next
            var exList = []
            event.component.getAllProperties('exdate').map(function (ex) {
                exList.push(ex.getFirstValue().toJSDate().getTime())
            })

            while ((next = expand.next()) && next.toJSDate() < timeRangeStop) {
                if (!exList.includes(next.toJSDate().getTime())
                    && timeRangeStart < next.toJSDate() && next.toJSDate() < timeRangeStop) {
                    eventList.push(new Event(next, event))
                }
            }
        } else if (eventInTimeRange(event, timeRangeStart, timeRangeStop)) {
            if (event.component.getFirstPropertyValue("status") == "CANCELLED") {
                console.log(event)
                if (!(cancelledEvents[event.uid] instanceof Array)) {
                    cancelledEvents[event.uid] = []
                }

                cancelledEvents[event.uid].push(event.startDate.toJSDate().getTime())
            } else {
                eventList.push(new Event(event.startDate, event))
            }
        }
    })
}

function eventInTimeRange(event, start, stop) {
    if (start < event.startDate.toJSDate() && event.startDate.toJSDate() < stop
        || start < event.endDate.toJSDate() && event.endDate.toJSDate() < stop
        || event.startDate.toJSDate() < start && stop < event.endDate.toJSDate()) return true
    return false
}

function orderEvents() {
    eventList.sort(function (e1, e2) {
        return e1.start - e2.start
    })
}

function writeEvents() {
    var cal = document.getElementById('calendar')
    cal.textContent = ''

    if (eventList.length > 0) {
        eventList.map(function (e) {
            cal.appendChild(e.toHTML())
        })
    } else {
        cal.textContent = 'No events found.'
    }
}

function xhrRequest(url, callback, fail) {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText)
            } else {
                fail(xhr.status)
            }
        }
    }

    xhr.open('GET', url)
    xhr.send()
}

function processData(data) {
    parseIcalData(data)
    orderEvents()
    writeEvents()
}

function requestFailed(status) {
    document.getElementById('calendar').textContent = 'Something has gone wrong. Try reloading the page.'
}

xhrRequest('https://cloud.chaospott.de/remote.php/dav/public-calendars/5HM7B0ZOLEYC3QD0?export', processData, requestFailed)
