<template>
  <div>
        <transition enter-active-class='animated bounceInLeft' 
        	leave-active-class='animated bounceOutRight'
        	>
        
        	<router-view></router-view> 
        </transition>
      
      

      <FootView></FootView>


  </div>
</template>

<script>
import FootView from './components/common/FootView'
export default {
  components:{
    FootView
  }
 
}
</script>