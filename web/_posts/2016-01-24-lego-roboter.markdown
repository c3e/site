---
layout: post
title: "Pls call me"
date: 2016-01-24 13:37:00
categories: 32c3
---

Auf dem 32C3 präsentierten die Mitglieder unseres Clubs ihre selbstgebastelten Projekte in der Chaos West Assemblie.
Darunter befand sich dieser kleine Freund.

![Quelle: Chaospott]({{ site.url }}/media/2016-01-24/robot.jpg)

Der Legoroboter ist aus Neugierde geboren, verschiedene Projekte miteinander zu verknüpfen. Als Ergebnis ist ein über [DTMF-Töne](https://de.wikipedia.org/wiki/Mehrfrequenzwahlverfahren) steuerbarer Roboter geboren, der angerufen werden kann und durch die Tasten 2-4-6-8 bewegt wird. 

Wie funktioniert das?

Zunächst wurde auf dem Lego Brick ein Debian Jessy installiert. Zum Glück ist der Mindstorm Computer mit einem SD-Kartenslot versehen, der in der Boot Reihenfolge zuerst berücksichtig wird. Darauf beruht das Projekt [ev3dev](http://www.ev3dev.org/). Es ermöglicht Linux als Betriebssystem zu nutzen und die Lego Motoren und Sensoren einfach über das schreiben in Systemdateien zu steuern. Darauf basierend wurde ein kleines Java Projekt geschrieben, welches die Steuerung der Motoren übernimmt und dem Roboter ermöglicht zu fahren. Der Lego-Computer besitzt zudem ein USB Slot, sodass er mit einen WLAN-Stick mit dem Internet verbunden werden kann. Nun müssen nur noch die DTMF Töne an das Steuerungsprogramm übermittelt werden. Dazu wird die [sipgate.io](https://www.sipgate.io) API genutzt. Die eingehenden Anrufe und DTMF-Töne werden dabei von der API an einen HTTP(S) Server geleitet. So wurde das Steuerungsprogramm um einen HTTP Endpunkt erweitert, der die DTMF Informationen in Bewegungen umsetzt.

Die Software für den Roboter liegt auf [Github](https://github.com/c3e/SipgateIO-ev3dev).

Mal sehen was in Zukunft noch so aus Lego gebaut wird. 
