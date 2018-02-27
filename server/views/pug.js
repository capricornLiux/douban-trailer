module.exports = `
doctype html
html(lang="en")
head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible" content="ie=edge")
    title Document
    link(rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css")
    script(src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.js")
    script(src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js")
body
    .container
        .row
            .col-md-8
                h1 hello
                p #{name}
            .col-md-4
                p #{address}
`;

