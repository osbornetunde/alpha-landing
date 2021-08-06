import styled from 'styled-components'


const StyledTerms = styled.section`
  background-color: var(--primary-white);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  height: 100%;
`


const StyledTermsMenu = styled.section`
  padding: 2.7rem 0 2.1rem 2.5rem;
  background-color: var(--sidebar-background);
  
  .pro-sidebar{
    height: calc(100vh - 14.7rem - 4.8rem);
  }
  
  .pro-sidebar > .pro-sidebar-inner{
    background-color: var(--sidebar-background);
  }

  .pro-sidebar .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item{
    background-color: var(--sidebar-background);
  }

  .pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu .pro-inner-list-item .pro-inner-item:before{
    display: none;
  }

  .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item > .pro-item-content{
    color: rgba(0, 0 , 0 , 0.6);
  }

  .pro-sidebar .pro-menu .pro-menu-item.pro-sub-menu > .pro-inner-item > .pro-item-content{
    color: #232323;
    font-weight: 800;
    font-size: 18px;
    line-height: 27px;
    font-family: var(--primary-font) !important;
  }
`

const StyledTermsContent = styled.section`
  padding: 6.3rem 6.8rem 1.8rem 3.6rem;
  max-height: 80%;
  height: 80%;
  overflow-y: scroll;
  
  .header-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 3.6rem .2rem 5.2rem;
    border-bottom: 1px solid #E5E5E5;
    font-family: var(--primary-font);
    margin-bottom: 4rem;
    
    h6{
      font-size: 2.6rem;
      font-weight: 800;
      line-height: 29px;
      color: #353542;
    }
    
    p{
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 27px;
      color: rgba(53, 53, 66, 0.6);
    }
  }
  
  .content{
    margin-top: .7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.8rem;
    padding: 0 3.6rem .2rem 5.2rem;
    color: #353542;
    
    .title{
      font-weight: 700;
      line-height: 2.7rem;
      letter-spacing: 0.02em;
      margin-bottom: 1.2rem;
      font-family: var(--primary-font);
      margin-top: 4rem;
    }
    
    .details{
      font-weight: 400;
      line-height: 3rem;
      letter-spacing: 0em;
      font-family: var(--font-light);
    }
  }

`

export { StyledTerms, StyledTermsMenu, StyledTermsContent }
