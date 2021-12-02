import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DetailsList,
  DetailsListLayoutMode,
  IDetailsHeaderProps,
  Selection,
  IColumn,
  ConstrainMode,
  IDetailsFooterProps,
  DetailsRow } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Toolbar } from './toolbar';
import  { EditAccountForm } from './edit';
//import { ContextualMenuItem, IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenuItem';

import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { Paging } from '../xrm/components/paging';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px'
});

const classNames = mergeStyleSets({
  wrapper: {
    height: '80vh',
    position: 'relative'
  },
  filter: {
    paddingBottom: 20,
    maxWidth: 300
  },
  header: {
    margin: 0
  },
  row: {
    display: 'inline-block'
  }
});

const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (props, defaultRender) => {
  if (!props) {
    return null;
  }

  // const onRenderColumnHeaderTooltip: any = tooltipHostProps => (
  //   <TooltipHost {...tooltipHostProps} />
  // );

  return (
    <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
      {/* {defaultRender!({
        ...props,
        onRenderColumnHeaderTooltip
      })} */}
    </Sticky>
  );
};

const onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (props, defaultRender) => {
  if (!props) {
    return null;
  }

  return (
    <Sticky stickyPosition={StickyPositionType.Footer} isScrollSynced={true}>
      <div className={classNames.row}>
        
      </div>
    </Sticky>
  );
};

export interface IDetailsListBasicExampleItem {
  id:string;
  company: string;
  email: string;
  phone: string;
  address: string;
  date: Date;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
  dialogVisible: boolean;
  selectedCount:number;
}

export class List extends React.Component<{}, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: any;
  private _columns: IColumn[];
  private _dialog: any;

  constructor(props: {}) {
    super(props);
this.onButtonClick = this.onButtonClick.bind(this);
    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });

    this._columns = [
      { key: 'company', name: 'Company', fieldName: 'company', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'email', name: 'Email', fieldName: 'email', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'phone', name: 'Phone', fieldName: 'phone', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'address', name: 'Address', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'date', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 200, isResizable: true,
      onRender: (item: any) => {
          
          return <span>{this.toDate(item.date)}</span>;
        } }
    ];

    this.state = {
      items: [],
      selectionDetails: this._getSelectionDetails(),
      dialogVisible: false,
      selectedCount:0
    };
  }

  componentDidMount() {
    console.log("mount");
    this.getData();
  }

  private getData() {
    fetch('https://next.json-generator.com/api/json/get/NkeswSIHO')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({ items: data });
      })
  };

  private toDate (dateStr: string | null | undefined): Date | null | string {
    if (!dateStr || isNaN(Date.parse(dateStr))) return "";
    var d = new Date(dateStr);
    return d.toDateString();
  };

  private onButtonClick(key: any):any {
    const selectionCount = this._selection.getSelectedCount();
    if (selectionCount === 0) return;
    const item : any = this._selection.getSelection()[0];
    this._dialog._showDialog(item._id);
    
  };

  private onPagingClick(direction: any) {
    alert(direction);
  }

  public render(): JSX.Element {
    const { items, selectionDetails, dialogVisible } = this.state;

    return (
      <Fabric>

      <EditAccountForm  ref={ref => (this._dialog = ref)}  />
<ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
<Sticky stickyPosition={StickyPositionType.Header}>
            <Toolbar  />
          </Sticky>

<MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selection={this._selection}
           
            selectionPreservedOnEmptyClick={true}
            onItemInvoked={this._onItemInvoked}
            onRenderDetailsHeader={onRenderDetailsHeader}
            //onRenderDetailsFooter={onRenderDetailsFooter}
            constrainMode={ConstrainMode.unconstrained}
          />
          
        </MarqueeSelection>
          <Sticky stickyPosition={StickyPositionType.Footer}>
          <Paging recordPerPage={10} from={1} to={this.state.items.length} selectedCount={this.state.selectedCount} totalCount={this.state.items.length} currentPage={1} onNavigationClick={this.onPagingClick}/>
             
          </Sticky>
</ScrollablePane>

     
       
      </Fabric>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    this.setState({selectedCount:selectionCount});
    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).company;
      default:
        return '${selectionCount} items selected';
    }
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      //items: text ? this._allItems.filter(i => i.company.toLowerCase().indexOf(text) > -1) : this._allItems
    });
  };

  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    if (!item) return;
    this._dialog._showDialog(item);
  };
}
