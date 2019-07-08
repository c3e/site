from jekyll/jekyll as builder
add web /srv/jekyll
run jekyll build --source /srv/jekyll --destination /tmp

from nginx:alpine
copy --from=builder /tmp /usr/share/nginx/html
copy nginx /etc/nginx
