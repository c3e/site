---
layout: post
title: "Das Maschinendeck berichtet"
date: 2017-04-10 09:09:42
categories: Neuigkeiten
---
Auf dem Maschinendeck haben sich in den letzten Wochen viele Leute getummelt, die an ihren Projekten und an der Infrastrunktur der foobar gearbeitet haben. In der Werkstatt und im Fablab wurde die Beleuchtung durch eine freundliche Spende erweitert. Die erweiterte Beleuchtung sorgt zum Beispiel für eine freie Sicht auf unsere neue Bandsäge, die ebenfalls über eine Spende den Weg in unseren Club gefunden hat. Zu der Bandsäge gesellen sich noch weitere Werkzeuge zur Holzbearbeitung (Handkreissäge, Standbohrmaschine, Schwingschleifer), mit deren Hilfe z.B. ein Regal aus einer alten Palette gezimmert wurde. Das rustikale Kunstwerk beherbergt zwei Plotter und sorgt für mehr Platz im Maschinendeck, den wir dann mit einer CNC-Fräse zustellen können. 

![Quelle: Chaospott]({{ site.url }}/media/2017-04-10/maschinendeck_berichtet_00.jpg)

Die erste Prototyp der neuen Deckenplatten ist fast fertig. Aktuell wird der Holzrahmen gefertigt und die LED-Stränge zusammengelötet, um die Platten der abgehangenen Decke gegen ein buntes Pixeldisplay zu tauschen. Für die einzelnen Pixel werden Leuchtdioden mit  vier Farbkanälen (RGBW) verwendet, die  in einer Matrix von 8x8 LEDs aufgebaut werden. Angesteuert wird das ganze Display über einen Mikrocontroller, der über sein USB-Interface Bilddaten entgegennimmt und daraus die Daten für die angeschlossenen Pixel berechnet. 

![Quelle: Chaospott]({{ site.url }}/media/2017-04-10/maschinendeck_berichtet_01.jpg)

Neben der Deckenbeleuchtung wurde ein LED-Display fertiggestellt, das über mehrere MAX7219 getrieben wird. Die Ansteuerung übernimmt ein ESP8266, der z.B. die aktuelle Zeit via NTP  oder Temperaturwerte der Räumlichkeiten über das MQTT-Protokoll abfragt und anzeigt. 

Das Angebot der Datenreisen wurde in den letzten Wochen um ein Dashboard erweitert. Eine Grafana-Instanz zeigt beispielsweise die Statistiken unserer Netzwerkinfrastruktur an.  Weitere Datenquellen werden in naher Zukunft folgen. Wir wünschen weiterhin viel Spaß beim Basteln und laden alle Interessierten Entitäten ein, uns einmal zu besuchen.