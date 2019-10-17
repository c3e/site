---
layout: post
title: "Maschinendeck berichtet"
date: 2019-10-16 20:58:15
---
Es gibt Neuigkeiten vom Maschinendeck! In den vergangenen Wochen und Monaten wurde fleißig an Projekten gebastelt, Geräte angeschafft und an der Infrastruktur des Clubs gewerkelt.

![Quelle: Chaospott](/media/2019-10-16/maschinendeck-berichtet-labornetzteil.jpg)
*Foto: Chaospott*

Das Elektroniklabor hat weiteren Zuwachs bekommen. Dank einer Spende konnten wir das Elab um ein Labornetzteil erweitern. Das Netzteil verfügt über eine serielle Schnittstelle, sodass es sich über einen Computer steuern lässt, um z. B. wechselnde Spannungen bereitzustellen.

![Quelle: Chaospott](/media/2019-10-16/maschinendeck-berichtet-ultimaker.jpg)
*Foto: Chaospott*

Auch das Fablab konnte durch eine Spende um einen [Ultimaker 3](https://dokuwiki.chaospott.de/geraete:3_d-drucker:start) erweitert werden. Durch den Dual-Extruder können zwei Materialien gleichzeitig verwendet werden, um Gegenstände auszudrucken. Dadurch ist es z. B. möglich, Modelle zweifarbig zu drucken oder wasserlösliches Stützmaterial zu verwenden. Für die beide Drucker wurden Materialhalter gedruckt, auf mit denen sich z. B. das PLA einfach abrollen lässt.

![Quelle: Chaospott](/media/2019-10-16/maschinendeck-berichtet-mqtt-sensor-aktor.jpg)
*Foto: Chaospott*

Die Aktoren und Sensoren in unserem mqtt-Netzwerk wurden um eine Steuerungsmöglichkeit der Heizungsventile und die Erfassung der CO²-Konzentration erweitert. Die CO²-Konzentration wird über ein Messgerät der Firma Dostmann ermittelt, welche kontinuierlich den Kohlenstoffdioxidgehalt misst und die Werte an einen  Raspberry Pi überträgt. Dieser stellt die Werte per [mqtt](https://de.wikipedia.org/wiki/MQTT) im lokalen Netz zur Verfügung. Zur Steuerung der Heizung haben wir motorbetriebene Heizungsventile angeschafft, welche über ein Bluetooth-Interface verfügen. Auch hier wird ein Raspberry Pi eingesetzt, um mqtt-Nachrichten per Bluetooth an die Ventile weiterzureichen. Beide mqtt-Endpunkte wurden in den letzten Monaten erfolgreich getestet, sodass nach und nach die anderen Räume damit ausgestattet werden.

Der Pottbot wurde wieder in Betrieb genommen. Einer unserer Nachwuchshacker hat einen Bot programmiert, der Termine aus unserem Kalender per [Twitter](https://twitter.com/chaospott) ankündigt. Darüber hinaus macht der Bot noch wöchentlich auf Clubdienste aufmerksam, die aus einer Liste zufällig ausgewählt werden. Bis jetzt enthält die Liste unsere [Statusseite](https://chaospott.de/status.html), den [Podcast](https://podcast.chaospott.de/), die Chaospatinnen, eine Übersicht über unsere [Mailinglisten](https://lists.chaospott.de/listinfo/discuss) und den [Kalender](https://chaospott.de/calendar.html).