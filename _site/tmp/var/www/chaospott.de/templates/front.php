<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/style.css" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Chaospott — Wir sind da wat am Hacken dran...</title>
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml">
	</head>
	<body>
		
		<div id="content">
			<div id="wrap">
				<div id="header" class="left">
					<a href="/" title="Chaospott"><img src="/logo.png" alt="Chaostreff Essen" width="350px" height="350px"></a>
				</div>
			</div>
			
			<div id="about">
  				<div class="layout">
  					<h2>Über uns</h2>
  					<p>Wir sind der örtliche Erfa-Kreis des Chaos Computer Clubs in Essen. Unsere Gesprächsthemen und Projekte reichen von Soft- und Hardware zu Datenschutz und Netzpolitik.</p>
  					<p>Alle Interessierten sind herzlich zu unserem Treff eingeladen.</p>

                    <h2><a href="logbuch.html">Logbuch</a></h2>
                    <div id="logbook">
                        <? if (isset($content['posts'])) foreach ($content['posts'] as $post) { ?>
                            
                        <div style="width: 100%;">
                            <a href="<?= h($post['post-permalink-or-link']) ?>"><h5><?= $post['post-title'] ?></h5></a>
                            <?= $post['post-type'] == 'link' ? '<span class="linkarrow">&rarr;</span>' : '' ?>
                        </div>
                        <span class="date">
                            <?= date('F j, Y', $post['post-timestamp']) ?>
                        </span>
                        <? } ?>
  				    </div>
                </div>
            </div>
            
  			<div id="contact">
  				<div class="layout">
  					<h2>Kontakt</h2>
  					<h3>Chaostreff</h3>
  					<p>Wir treffen uns jeden Mittwoch ab 19 Uhr in der <a href="http://www.die-foobar.de/">foobar</a>, Sibyllastr. 9 (Hinterhof) in 45136 Essen.</p>
  					<h3>Mailingliste</h3>
  					<p>Zum Abonnieren der Mailingliste eine leere Mail an <pre>chaostreff-essen-subscribe(at)lists.cccmz.de</pre> schicken oder das <a href="https://lists.cccmz.de/mailman/listinfo/chaostreff-essen">Webinterface</a> benutzen.</p>
					
					<h3>E-Mail</h3>
<pre>E-Mail: <a href="mailto:cryptoparty@ccc-essen.de">cryptoparty@ccc-essen.de</a>
GPG-Fingerprint: <a href="/media/ccc-essen.pgp">01CB 5D67 4100 6A17 2492 739D 4592 4F8A 867E D719</a></pre>

  					<h3>IRC</h3>
  					<pre>Server: <a href="http://hackint.eu/">hackint.eu</a>
Channel: #chaospott</pre>
  				</div>
  				</div>
  				<div style="clear: both;">
  				
			<div id="footer">
				<!--<span>Februar 2012</span>-->
				<span><?= date ("F Y"); ?></span>
				<!--<a href="impressum.html">Impressum</a>-->
			</div>
	</body>
</html>
