# douban-trailer
### pug模板引擎的使用
* index.pug
  * layouts
    * default.pug
  * includes
    * style.pug
    * script.pug

index.pug
```
extends ./layouts/default

block title
    title 电影预告片

block content
    .container
        .row
            .col-md-8
                h1 hello
                p #{name}
            .col-md-4
                p #{address}
```

default.pug
```
doctype html
html(lang="en")
head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible" content="ie=edge")
    block title
    include ../includes/style
body
    block content
    include ../includes/script
```

style.pug
```
link(rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css")
```

script.pug
```
script(src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.js")
script(src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js")
```

