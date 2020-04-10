import * as React from 'react';
// import { useRedlistQuerys } from '../../generated/graphql';
import './styles.css';
//map presidential component into container
interface iProps{
  data: RedListQuery;
}

const className = 'RedList';

const RedList: React.FC<iProps> = ({ data }) => (
  <div className={className}>
    <h3> Red Ether </h3>
    <ol className={`${className}__list`}>
    {!!data.reactions && 
    data.reactions.map(
      (reaction, i) => 
      !!reaction && (
        <li key={i} className={`${className}__item`}>
          {reaction.edges}
        </li>
      ),     
    )}
    </ol> 
  </div>
);
//smart components
export default RedList;