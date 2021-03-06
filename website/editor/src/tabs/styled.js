//@flow

import {styled} from 'linaria/react'

export const TabHeader = styled.li`
  border-right: 1px solid #ddd;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 7px 15px 5px 15px;
  margin: 0;
  background-color: ${({isActive}) => (isActive ? 'white' : 'inherit')};
  border-bottom: ${({isActive}) => (isActive ? '2px solid #e95801' : '2px solid transparent')};
`

export const TabHeaderList = styled.ul`
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;
  
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: center;

  background-color: #f7f7f7;
  height: 36px;
  min-height: 36px;
  overflow-y: hidden;
`
