import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '记忆科学',
  description: '程序员的脑科学入门学习资料',
  icon: '/brain-icon.svg',
  logo: {
    light: '/brain-logo.svg',
    dark: '/brain-logo-dark.svg',
  },
  themeConfig: {
    footer: {
      message: '© 2026 记忆科学学习资料 | 公众号：华东野老',
    },
    lastUpdated: true,
    enableContentAnimation: true,
    hideNavbar: 'never',
    sidebar: {
      '/guide/': [
        {
          text: '开始学习',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '记忆是什么', link: '/guide/intro' },
            { text: '大脑与深度学习', link: '/guide/brain-vs-ai' },
          ],
        },
        {
          text: '神经基础',
          items: [
            { text: '神经元与突触可塑性', link: '/guide/neural-basis/synapse' },
            { text: '海马体', link: '/guide/neural-basis/hippocampus' },
            { text: '分布式存储', link: '/guide/neural-basis/distributed' },
          ],
        },
        {
          text: '容量与编码',
          items: [
            { text: '人脑的容量', link: '/guide/capacity-encoding/capacity' },
            { text: '语义网络与联想', link: '/guide/capacity-encoding/semantic' },
            { text: '重构性记忆', link: '/guide/capacity-encoding/reconstructive' },
          ],
        },
        {
          text: '遗忘机制',
          items: [
            { text: '艾宾浩斯遗忘曲线', link: '/guide/forgetting/ebbinghaus' },
            { text: '遗忘的三大理论', link: '/guide/forgetting/theories' },
          ],
        },
        {
          text: 'U型曲线',
          items: [
            { text: 'U型遗忘曲线', link: '/guide/u-curve/serial-position' },
          ],
        },
        {
          text: '进阶讨论',
          items: [
            { text: '睡眠与记忆巩固', link: '/guide/advanced/sleep' },
            { text: '情绪与记忆', link: '/guide/advanced/emotion' },
            { text: '创伤记忆', link: '/guide/advanced/trauma' },
            { text: '记忆与AI类比', link: '/guide/advanced/ai-comparison' },
            { text: '记忆的上限', link: '/guide/advanced/limit' },
          ],
        },
      ],
    },
  },
  globalStyles: path.join(__dirname, 'docs/styles/global.css'),
  markdown: {
    showLineNumbers: true,
  },
});