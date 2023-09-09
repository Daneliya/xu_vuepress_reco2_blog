import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    title: "徐晓龙的博客",
    description: "描述",
    theme: recoTheme({
        style: "@vuepress-reco/style-default",
        logo: "/logo.png",
        author: "徐晓龙",
        authorAvatar: "/head.png",
        docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
        docsBranch: "main",
        docsDir: "example",
        lastUpdatedText: "",
        // series 为原 sidebar
        series: {
            "/docs/theme-reco/": [
                {
                    text: "开发文档",
                    children: ["home", "theme"],
                },
                {
                    text: "日常笔记",
                    children: ["api", "plugin"],
                },
            ],
        },
        // 自动设置分类
        // autoSetBlogCategories: true,
        // 自动将分类和标签添加至头部导航条
        // autoAddCategoryToNavbar: {
        //     location: 3, // 默认 0
        //     categoryText: '分类', // 默认 categories
        //     tagText: '标签' // 默认 tags
        // },
        navbar: [
            {text: "主页", link: "/", icon: 'Home'},
            {
                text: "分类", link: "/categories/reco/1/", icon: 'Document',
                children: [
                    {text: "RocketMQ", link: "/categories/RocketMQ/1/", icon: 'Document'},
                ]
            },
            {text: "标签", link: "/tags/tag1/1/", icon: 'SubVolume'},
            // {text: "时间轴", icon: 'SubVolume'},
            {
                text: "随笔文档",
                icon: 'Document',
                children: [
                    {text: "开发文档", link: "/docs/theme-reco/theme"},
                    {text: "日常笔记", link: "/blogs/other/guide"},
                ],
            },
        ],
        // bulletin: {
        //     body: [
        //         {
        //             type: "text",
        //             content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
        //             style: "font-size: 12px;",
        //         },
        //         {
        //             type: "hr",
        //         },
        //         {
        //             type: "title",
        //             content: "QQ 群",
        //         },
        //         {
        //             type: "text",
        //             content: `
        //   <ul>
        //     <li>QQ群1：1037296104</li>
        //     <li>QQ群2：1061561395</li>
        //     <li>QQ群3：962687802</li>
        //   </ul>`,
        //             style: "font-size: 12px;",
        //         },
        //         {
        //             type: "hr",
        //         },
        //         {
        //             type: "title",
        //             content: "GitHub",
        //         },
        //         {
        //             type: "text",
        //             content: `
        //   <ul>
        //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
        //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
        //   </ul>`,
        //             style: "font-size: 12px;",
        //         },
        //         {
        //             type: "hr",
        //         },
        //         {
        //             type: "buttongroup",
        //             children: [
        //                 {
        //                     text: "打赏",
        //                     link: "/docs/others/donate.html",
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // commentConfig: {
        //   type: 'valie',
        //   // options 与 1.x 的 valineConfig 配置一致
        //   options: {
        //     // appId: 'xxx',
        //     // appKey: 'xxx',
        //     // placeholder: '填写邮箱可以收到回复提醒哦！',
        //     // verify: true, // 验证码服务
        //     // notify: true,
        //     // recordIP: true,
        //     // hideComments: true // 隐藏评论
        //   },
        // },
    }),
    // debug: true,
});
