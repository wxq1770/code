<template>
  <div class="index">
    <mu-circular-progress :size="60" :strokeWidth="5"/>

    <mu-time-picker hintText="12小时制"/>

    <mu-raised-button label="show snackbar" class="demo-snackbar-button" @click="showSnackbar"/>
    <mu-raised-button label="show toast" class="demo-snackbar-button" @click="showToast"/>
    <mu-snackbar v-if="snackbar" message="一段简单的文本" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar"/>
    <mu-toast v-if="toast" message="一段简单的文本" @close="hideToast"/>

    <mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>
          请选择一个
        </mu-sub-header>
        <mu-list-item title="阴阳师"/>
        <mu-list-item title="贪吃蛇大作战"/>
        <mu-list-item title="一划到底"/>
        <mu-list-item title="全民斗地主"/>
      </mu-list>
    </mu-bottom-sheet>
    <mu-float-button icon="add" class="demo-float-button"/>
    <mu-card>
      <mu-card-header title="Myron Avatar" subTitle="sub title">
        <mu-avatar src="/images/uicon.jpg" slot="avatar"/>
      </mu-card-header>
      <mu-card-media title="Image Title" subTitle="Image Sub Title">
        <img src="/images/sun.jpg" />
      </mu-card-media>
      <mu-card-title title="Content Title" subTitle="Content Title"/>
      <mu-card-text>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Action 1"/>
        <mu-flat-button label="Action 2"/>
      </mu-card-actions>
    </mu-card>


    <mu-raised-button label="toggle drawer" @click="toggle()"/>
      <mu-drawer right :open="open" @close="toggle()">
        <mu-appbar title="Muse UI"/>
        <mobile-tear-sheet>
          <mu-list>
            <mu-list-item title="Inbox">
              <mu-icon slot="left" value="inbox"/>
            </mu-list-item>
            <mu-list-item title="Starred">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item title="Sent mail">
              <mu-icon slot="left" value="send"/>
            </mu-list-item>
            <mu-list-item title="Drafts">
              <mu-icon slot="left" value="drafts"/>
            </mu-list-item>
          </mu-list>
          <mu-divider />
          <mu-list>
            <mu-list-item title="All mail">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Trash">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Spam">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
            <mu-list-item title="Follow up">
              <mu-icon slot="right" value="info"/>
            </mu-list-item>
          </mu-list>
        </mobile-tear-sheet>
      </mu-drawer>

      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>图片展示</mu-sub-header>
        <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
        <mu-pagination :total="total" :current="current" @pageChange="handleClick">
  </mu-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomSheet: false,
      open: false,
      total: 50,
      current: 1,
      snackbar: false,
      toast: false,
      list: [{
        image: '/images/breakfast.jpg',
        title: 'Breakfast',
        author: 'Myron',
        featured: true
      }, {
        image: '/images/burger.jpg',
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: '/images/camera.jpg',
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: '/images/hats.jpg',
        title: 'Hats',
        author: 'kakali'
      }, {
        image: '/images/honey.jpg',
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: '/images/morning.jpg',
        title: 'Morning',
        author: 'mokayi',
        featured: true
      }, {
        image: '/images/vegetables.jpg',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: '/images/water-plant.jpg',
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    },
    toggle () {
      this.open = !this.open
    },
    showSnackbar () {
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    showToast () {
      this.toast = true
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    hideToast () {
      this.toast = false
      if (this.toastTimer) clearTimeout(this.toastTimer)
    }
  }
}
</script>