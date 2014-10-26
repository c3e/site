<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/style.css" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title><?= 
        (isset($content['post']) ? h($content['post']['post-title']) . ' &ndash; ' : '') . 
        ($content['page-title'] != $content['blog-title'] && (
            $content['page-type'] == 'page' || $content['page-type'] == 'archive' || $content['page-type'] == 'tag' || $content['page-type'] == 'type' 
        ) ? h($content['page-title']) . ' &ndash; ' : '') . 
        h($content['blog-title'])
    ?>
     — Wir sind da wat am Hacken dran...
    </title>
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml">
	</head>
	<body>
		
		<div id="content">
			<div id="wrap">
				<div id="header" class="left">
					<a href="/" title="Chaospott"><img src="/logo.png" alt="Chaostreff Essen" width="350px" height="350px"></a>
				</div>
			</div>
			<div class="article">
				<? if ($content['page-type'] == 'page') { ?>
            <h2><?= h($content['page-title']) ?></h2>
            <?= $content['page-body'] ?>
        <? } else { ?>
            <? if (isset($content['posts'])) foreach ($content['posts'] as $post) { ?>
              <div class="layout">
                <h2 class="news-title">
                    <a href="<?= h($post['post-permalink-or-link']) ?>"><?= h($post['post-title']) ?></a>
                    <?= $post['post-type'] == 'link' ? '<span class="linkarrow">&rarr;</span>' : '' ?>
                </h2>
                <p class="date">
                    <?= date('F j, Y', $post['post-timestamp']) ?>
                </p>
                <?= $post['post-body'] ?>
              </div>
            <? } ?>
        <? } ?>
        
        <? if (isset($content['archives'])) { ?>
                <h3 class="archive">Archives</h3>
                <div class="archive-layout">
                    <? $so_far = 0; $per_column = ceil(count($content['archives']) / 5); ?>
                    <? foreach ($content['archives'] as $archive) { ?>
                        <? if (++$so_far > $per_column) { ?>
                            <? $so_far = 1; ?>
                            </div>
                            <div class="archive-layout">
                        <? } ?>
                        <a href="<?= h($archive['archives-uri']) ?>"><?= $archive['archives-month-short-name'] ?>&nbsp;<?= $archive['archives-year'] ?></a>
                        <br/>
                    <? } ?>
                </div>
            <div>
        <? } ?>
		</div>
			</div>
			<div id="footer">
				<span><?= date ("F Y"); ?></span>
				<!--<a href="impressum.html">Impressum</a>-->
			</div>
	</body>
</html>
