module.exports = {
    /**
     * @description 网站标题
     */
    title: 'HaoKan',
    /**

    /**
     * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
     */
    tokenCookieExpires: 1,
    /**
     * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天s
     */
    passCookieExpires: 1,

    /**
     * @description token key
     */
    TokenKey: 'HaoKan-TOKEN',
    /**
     * @description 请求超时时间，毫秒（默认2分钟）
     */
    timeout: 1200000,

    /**
     * 是否显示设置的底部信息
     */
    showFooter: true,
    /**
     * 底部文字，支持html语法
     */
    footerTxt: '© 2019 Peng zi jian <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>',
    /**
     * 备案号
     */
    caseNumber: '深ICP备xxxxxxx号'
}
