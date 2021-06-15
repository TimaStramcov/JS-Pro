Vue.component('search' , {
    template: `
    <form class="search-form" action="#" @submit.prevent="$parent.filter">
                            <input type="text" v-model="$parent.userSearch">
                            <button type="submit" class="header__button-search"><img src="img/logo-loup.svg" alt="logo"
                            width="26" height="27"><i class="fas fa-search"></i></button>
                        </form>
    `
})

