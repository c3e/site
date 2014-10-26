#scale pictures and display links
set TARGET $argv[1]

for i in $TARGET/*;  

	#echo $RESIZE_FACTOR $i (printf "$TARGET/%s_small.jpg" (basename $i .jpg))
	convert -resize 400 $i (printf "$TARGET/%s_small.jpg" (basename $i .jpg))
	printf "<a class=\"news-picture\" href=\"/media/%s\"><img src=\"/media/$TARGET/%s_small.jpg\" /></a>\n" $i (basename $i .jpg) 
end


