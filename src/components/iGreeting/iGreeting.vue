<template>
    <h2>{{`${prefix} ${username}， ${suffix}`}}</h2>
</template>

<script>
    function getTime() {
        const time = new Date().getHours();

        if (time >= 5 && time < 7) return 1;
        else if (time >= 7 && time < 11) return 2;
        else if (time >= 11 && time < 13) return 3;
        else if (time >= 13 && time < 17) return 4;
        else if (time >= 17 && time < 18) return 5;
        else if (time >= 18 && time < 21) return 6;
        else return 0;
    }

    function getPrefix() {
        const arr = {
            0: '夜深了!',
            1: '早安！',
            2: '上午好！',
            3: '该吃饭啦！',
            4: '下午好！',
            5: '傍晚了，',
            6: '天黑了，',
        };

        return arr[getTime()];
    }

    function getSuffix() {
        const arr = {
            0: [
                '😴别再熬夜伤身体！',
                '🌘保持充足睡眠会变帅哦！',
            ],
            1: [
                '💪起床第一句先给自己打个气！',
                '🌈看看天气怎么样，记得及时增添衣服。',
                '🙂保持微笑，相信自己最棒！',
                '😎一觉醒来，又更好看了呢！',
            ],
            2: [
                '🛠昨天遗留的问题解决了吗？',
                '📰看一下新闻，了解一下国际大事。',
                '🗒计划一下今天要完成的任务吧！',
                '🖥去群里看看有没有什么新技术分享吧。'
            ],
            3: [
                '🤔准备吃些什么呢？',
                '🍚快去吃饭吧，吃饱了下午才能好好工作！',
                '🚶吃完饭和同事去散个步吧！',
                '😴饭后午休一会，下午精力更充沛！',
            ],
            4: [
                '☕喝杯咖啡提提神吧!️',
                '🎧听歌能够有效防止犯困哦!️',
                '😜离开座位，起来接杯水活动活动吧。️',
                '👨‍💻‍️矫正坐姿，不要离屏幕太近哦。️',
                '🌱放松一下眼睛，看看绿植吧。️',
            ],
            5: [
                '😀马上就要下班了，今天的任务解决了吗？',
                '🤣收拾收拾，准备下班吧！',
                '🍚下班后要不要去和朋友约个饭呢？',
                '🎮下班后适当放松一下，和朋友去开个黑吧！',
                '🏋️劳累了一天，一会去健身房运动放松一下吧！'
            ],
            6: [
                '👍适当加班，早点回去休息，明天继续努力。',
                '🎬又有新电影上映了，约个朋友去看看吧。',
                '☎️打个电话给老朋友叙叙旧、唠唠嗑吧。️',
            ],
        };
        const length = arr[getTime()].length;
        const index = Math.floor(Math.random() * length);

        return arr[getTime()][index];
    }

    export default {
        name: "Greeting",
        props: {
            username: {
                type: String
            }
        },
        data() {
            return {
                prefix: getPrefix(),
                suffix: getSuffix()
            }
        }
    }
</script>
