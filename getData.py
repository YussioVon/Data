#! /usr/bin/env python
# -*-coding:utf-8 -*
# @Time : 2021/7/20 8:52
# @Author :Yussio
# @FileName : getData

import web
urls = (
    '/index', 'index',
    '/getData','getData'
)

admin = web.template.render('static/')

class index:
    def GET(self):
        try:
            return admin.index()
        finally:
            with open('error.txt','w') as f:
                f.write('error')
class getData:
    def POST(self):
        data = web.input(number=None)
        number = data.number
        with open('data.txt', 'w') as f:
            f.write(str(number))
if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()