/**
 * @Author: luowen <bigpao.luo@gmail.com>
 * @Time: 2017/9/24
 * @Description:
 */

import AppController from "./AppController";
import webshotService from "../services/webshotService";

export default class WebshotCtrl extends AppController{
    webShot(request, response) {
        let url = request.query.url,
            width = parseInt(request.query.w),
            height = parseInt(request.query.h);
        if (!url) {
            return response.send(super.notsuccess(1, "截屏的网页地址不能为空！"));
        }
        let filename = `${(new Date()).getTime()}_${Math.ceil(Math.random() * 10000)}.jpg`;
        webshotService.screenshot(url, filename, width, height);
        return response.send(super.success({query: request.query, filename: filename}));
    }

    htmlShot(request, response) {
        return response.send(super.success({
            msg: "正在开发中...."
        }))
    }
}