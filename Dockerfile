from jekyll/jekyll as builder
add . /srv/jekyll
run jekyll build --source /srv/jekyll --destination /tmp

from nginx:alpine
copy --from=builder /tmp /usr/share/nginx/html
