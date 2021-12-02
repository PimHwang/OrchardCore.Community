import React from 'react';
import {gql, useQuery } from '@apollo/client';

import {
  Page,
  Navbar,
  List,
  ListItem,
  ListInput,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';


export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

export default () => {
   const {data,loading,error}=useQuery(GET_LAUNCHES);

  return (
    <Page>
      <Navbar title="Launch" backLink="Back" />
      <BlockTitle>Launch</BlockTitle>
      {
        loading && <p>加载中...</p>
      }
      {
        error && <p>ERROR...</p>
      }

      <List form>
        {data && 
          data.launches &&
          data.launches.launches &&
          data.launches.launches.map(launch => (                
            <ListInput key="" label={launch.mission.name} type="text" placeholder="Name" />  
          ))}
      </List>

    </Page>
  ); 
};