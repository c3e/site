layout: post
title: "Maschinendeck berichtet"
date: 2019-10-16 14:12:15
---
Es gibt Neuigkeiten vom Maschinendeck! In den vergangenen Wochen und Monaten wurde fleißig an Projekten gebastelt, Geräte angeschafft und an der Infrastruktur des Clubs gewerkelt.

Das Elektroniklabor hat weiteren Zuwachs bekommen. Dank einer Spende konnten wir das Elab um ein Labornetzteil erweitern. Das Netzteil verfügt über eine serielle Schnitstelle, so dass es sich über einen Computer steuern lässt, um z.B. wechselnde Spannungen bereit zu stellen. 

![Quelle: Chaospott](/media/209-10-16/labornetzteil.jpg)
*Foto: Chaospott*

Die Aktoren und Sensoren in unserem mqtt-Netzwerk wurden um eine Steuerungsmöglichkeit der Heizungsventile und die Erfassung der CO²-Konzentration erweitert. Die CO²-Konzentration wird über ein Messgerät der Firma Dostmann ermittelt. Die Messstation misst kontonuierlich den Kohlenstoffdioxidgehalt und überträgt die Werte per Usb an ein Raspberry Pi. Dieser stellt die Werte per mqtt im lokalen Netz zur Verfügung. Zur Steuerung der Heizung haben wir motorbetriebene Heizungsventile angeschafft, welche über ein Bluetooth-Interface verfügen. Auch hier wird ein Raspberry Pi eingesetzt, um mqtt-Nachrichten per Bluetooth an die Ventile weiterzureichen. Beide mqtt-Endpunkte wurden in den letzten Monaten erfolgreich getestet, so dass nach und nach die anderen Räume damit ausgestattet werden.

Der Pottbot wurde wieder in Betrieb genommen. Einer unsere Nachwuchshacker hat einen Bot programmiert, der Termine aus unserem Kalender per Twitter ankündigt. Darüber hinaus macht der Bot noch wöchentlich auf Clubdienste aufmerksam, die aus einer Liste zufällig ausgewählt werden. Bis jetzt enthält die Liste unsere [Statusseite](https://chaospott.de/status.html), den [Podcast](https://podcast.chaospott.de/), die Chaospatinnen, eine Übersicht über unsere [Mailinglisten](https://lists.chaospott.de/listinfo/discuss) und den [Kalender](https://chaospott.de/calendar.html). 