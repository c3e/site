site

==

Chaospott Seite / Blog


jekyll + bootstrap

### Blogeinträge
#### Text
Blogeinträge werden in dem Verzeichnis „_posts“ abgelegt. Um einen Blogeintrag zu verfassen legt man eine Datei mit dem Schema „Jahr-MM-TT-Titel.markdown“ an. Der Blogeintrag beginnt mit folgenden Metadaten:
<pre><code>---
layout: post
title: "Neues Update für DocPatch"
date: 2015-05-23 13:37:00
categories: docpatch
---</code></pre>
Damit wird der Titel des Blogeintrags, das Datum der Veröffentlichung und die Kategorie (optional) festgelegt. 

#### Bilder
Bilder für Blogeinträge werden unterhalb von Media in einem eigenen Verzeichnis (Jahr-MM-TT) abgelegt. 

<pre><code>~/site/media/jahr-mm-tt
</code></pre>

Als erstes sollte man die Exif-Daten (z.B. Geoinformation) der Bilder entfernen. 

Als erstes werden alle relevanten Metadaten entfernt. Dabei wird auch die „Rotation“ des Bildes entfernt.
<pre><code>exiftool -all= $Bild
</code></pre>

Ggf. muss das Bild gedreht werden, wenn es ohne die Metatags auf dem Kopf steht oder auf der Seite liegt.

Der letzte Schritt setzt die Bilder auf eine einheitliche Breite.
<pre><code>mogrify -resize "1140>" $Bild
</code></pre>

Wenn das Bild in der korrekten Größe und Ausrichtung vorliegt, kann es wie Folgt eingebunden werden.
<pre><code>
![Quelle: Chaospott]({{ site.url }}/media/Jahr-MM-TT/$Bild.jpg)
</code></pre>
