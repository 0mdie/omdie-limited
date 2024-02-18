function showSideBar (){
    const sideBarIcon = document.querySelector('.sidebar')
    sideBarIcon.style.display = 'flex'
  }

function hideSideBar (){
const sideBarIcon = document.querySelector('.sidebar')
sideBarIcon.style.display = 'none'
}


// function stickyNavBar(){
//   window.addEventListener('scroll', ()=> {
//     const navBarStick = document.querySelector('.navbar');
//     navBarStick.classList.toggle('sticky', window.scrollY > 0)
//   })  
// };


export {showSideBar, hideSideBar}
