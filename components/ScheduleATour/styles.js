import styled from 'styled-components';

const StyledTourContainer = styled.div`
  width: 100%;
  display: flex;
  .tour-details-container{
    width: 50%;
    
  }
  .tour-details-container p {
    font-family: var(--primary-font);
    font-size: 6.7rem;
    font-weight: 800;
    line-height: 65px;
    letter-spacing: -0.02em;
    color: #fafafa;
    margin-bottom: 2.3rem;
  }
  
  .tour-details-container p span {
    margin-bottom: 5.5rem;
    border-bottom: 10px solid  #00E2FF;
    transform: rotate(-1.11deg);
  }
  
  .guide-container {
   margin-top: 5rem;
  }
  
  .calendar-container{
    position: relative;
  }
  
  .bell{
    position: absolute;
    top: -2rem;
    right: 4rem;
    transform: rotate(45deg);
    z-index: 1;
  }

`
export { StyledTourContainer }
