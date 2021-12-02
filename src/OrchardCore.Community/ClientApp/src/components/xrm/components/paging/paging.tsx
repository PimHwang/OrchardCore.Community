import React, { FunctionComponent } from 'react'; 
import { Direction, IPagingProps } from './paging.types';
import { createComponent, IViewComponent } from '@uifabric/foundation';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { ActionButton, IIconProps } from 'office-ui-fabric-react';

const PagingView: IViewComponent<IPagingProps> = props => {
  const { children, from, to, selectedCount, totalCount, currentPage, onNavigationClick} = props;
 
return ( <div>
  
<Stack horizontal grow>
  <Stack.Item grow >
  {from} - {to} of {totalCount} ({selectedCount} Selected)
  </Stack.Item>
  
<Stack.Item grow >
<Stack grow horizontal horizontalAlign="end">
<ActionButton iconProps={
      {iconName: 'ChevronLeftEnd6'}
} onClick={() => {
      //onNavigationClick(Direction.firstPage);
    }} />
    <ActionButton iconProps={
      {iconName: 'ChevronLeftSmall'}
} onClick={() => {
      //onNavigationClick(Direction.previousPage);
    }} />
    <ActionButton disabled>
      Page {currentPage}
    </ActionButton>

    <ActionButton iconProps={{iconName: 'ChevronRightSmall'} } onClick={() => {
      //onNavigationClick(Direction.nextPage);
    }} />


</Stack>
  </Stack.Item>
  </Stack>
   
</div>)
  
};

export const Paging: React.FunctionComponent<IPagingProps> = createComponent(PagingView);

export default Paging;