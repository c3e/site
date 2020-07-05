# site LEGACY

**Dieses Repo wurde abgelöst durch [dieses](https://git.chaospott.de/Chaospott/site). Bitte pusht ab sofort dort hin, wenn ihr eure Änderungen auch sehen wollt**

Die Chaospott Seite / Der Blog

Zu finden auf [chaospott.de](https://chaospott.de)

jekyll + bootstrap

## Blogeinträge

### Text

Blogeinträge werden in dem Verzeichnis „web/\_posts“ abgelegt. Um einen Blogeintrag zu verfassen legt man eine Datei mit dem Schema „Jahr-MM-TT-Titel.markdown“ an. Der Blogeintrag beginnt mit folgenden Metadaten:
<pre><code>---
layout: post
title: "Neues Update für DocPatch"
date: 2015-05-23 13:37:00
categories: docpatch
---</code></pre>
Damit wird der Titel des Blogeintrags, das Datum der Veröffentlichung und die Kategorie (optional) festgelegt.

### Bilder

Bilder für Blogeinträge werden unterhalb von Media in einem eigenen Verzeichnis (Jahr-MM-TT) abgelegt.

<pre><code>~/site/media/jahr-mm-tt
</code></pre>

Als erstes sollte man die Exif-Daten (z.B. Geoinformation) der Bilder entfernen. Dabei wird auch die „Rotation“ des Bildes entfernt.
<pre><code>exiftool -all= $Bild
</code></pre>

Ggf. muss das Bild gedreht werden, wenn es ohne die Metatags auf dem Kopf steht oder auf der Seite liegt.
<pre><code>convert -rotate 90 $Bild $Bild_out.jpg</code></pre>

Der vorletzte Schritt setzt die Bilder auf eine einheitliche Breite.
<pre><code>mogrify -resize "1140>" $Bild
</code></pre>

Viele Bilder können noch optimiert werden, damit der benötige Speicherplatz und die zu übertragende Datenmenge reduziert wird.
<pre><code>jpegoptim -m 80 %Bild.jpg</code></pre>

Wenn das Bild in der korrekten Größe und Ausrichtung vorliegt, kann es wie Folgt eingebunden werden.
<pre><code>![Quelle: Chaospott]({{ site.url }}/media/Jahr-MM-TT/$Bild.jpg)
</code></pre>
