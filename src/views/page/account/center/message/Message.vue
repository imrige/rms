<template>
    <a-list itemLayout="vertical" :dataSource="dataSource">
        <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta>
                <a-avatar slot="avatar" :src="item.avatar" :size="40"/>
                <template slot="title">
                    {{item.name}}
                    {{typesMap[item.type]}}
                    你的评论
                </template>
                <template slot="description">
                    <span>{{item.dateTime}}</span>
                </template>
            </a-list-item-meta>

            <p>{{item.content}}</p>

            <template slot="actions">
                <span><a-icon class="mr-1" type="star-o"/>102</span>
                <span><a-icon class="mr-1" type="like-o"/>23</span>
                <span><a-icon class="mr-1" type="message-o"/>4</span>
            </template>
        </a-list-item>
    </a-list>
</template>

<script>
    let dataSource = [
            {
                name: '吴彦祖',
                type: 1,
                dateTime: '2019-09-19 12:34:17',
                content: null,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg'
            },
            {
                name: '周杰伦',
                type: 2,
                dateTime: '2019-09-19 12:34:17',
                content: '这年头，有纹身的都怕热，用苹果的都没兜，带手表的爱拍腿，镶金牙的爱咧嘴。 现如今，没结婚的像结婚的一样同居，结婚的像没结婚的一样分居。动物像人一样穿衣服，人像动物一样露着肉。小孩子像大人一样成熟，大人像小孩子一样幼稚。女人像男人一样爷们，男人像女人一样娘们。没钱的像有钱的一样装富，有钱的像没钱的一样装穷。情人像夫人一样四处招摇，夫人像情人一样深入简出。 现在存折里不到百万的，不叫存款，叫余额。审视了一下自己，原来，自己的那点只能叫手续费，有时候连手续费都不足。 慢慢明白了，戴三百块的表和三百万的表，时间是一样的； 喝三十块的酒和三千块的酒，呕吐是一样的；住三十平米的房和三百平米的房，孤独是一样',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg'
            },
            {
                name: '彭于晏',
                type: 3,
                dateTime: '2019-09-19 12:34:17',
                content: '第一遍，这啥玩意？玩尬？ 第二遍，有点意思，好玩。 第三遍, 来 来~ 画个彩虹 ~对辽 这边再画个龙， 诶~ 彩虹 画龙 ，诶 画龙 ~',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg'
            },
        ],
        typesMap = {
            1: '点赞了',
            2: '回复了',
            3: '转发了'
        };

    export default {
        name: "Message",
        data() {
            return {
                dataSource,
                typesMap
            }
        }
    }
</script>
