import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '../src';
import { AppComponent } from './app.component';
import { BasicAutoComponent } from './basic/basic-auto.component';
// -- Basic
import { BasicFixedComponent } from './basic/basic-fixed.component';
// -- Themes
import { BootstrapThemeComponent } from './basic/bootstrap.component';
import { ContextMenuDemoComponent } from './basic/contextmenu.component';
import { RowCssComponent } from './basic/css.component';
import { DarkThemeComponent } from './basic/dark-theme.component';
import { DynamicHeightComponent } from './basic/dynamic-height.component';
import { FilterBarComponent } from './basic/filter.component';
import { FooterDemoComponent } from './basic/footer.component';
import { FullScreenComponent } from './basic/fullscreen.component';
import { InlineEditComponent } from './basic/inline.component';
import { LiveDataComponent } from './basic/live.component';
import { MultipleTablesComponent } from './basic/multiple.component';
import { ResponsiveComponent } from './basic/responsive.component';
import { RowDetailsComponent } from './basic/row-detail.component';
import { RowDragComponent } from './basic/row-drag.component';
import { RowGroupingComponent } from './basic/row-grouping.component';
import { RxDemoComponent } from './basic/rx.component';
import { HorzVertScrolling } from './basic/scrolling.component';
import { TabsDemoComponent } from './basic/tabs.component';
import { VirtualScrollComponent } from './basic/virtual.component';
import { ColumnFlexComponent } from './columns/column-flex.component';
import { ColumnForceComponent } from './columns/column-force.component';
import { ColumnReorderComponent } from './columns/column-reorder.component';
import { ColumnStandardComponent } from './columns/column-standard.component';
// -- Columns
import { ColumnToggleComponent } from './columns/column-toggle.component';
import { ColumnPinningComponent } from './columns/pinning.component';
// -- Paging
import { ClientPagingComponent } from './paging/paging-client.component';
import { PagingScrollingNoVirtualizationComponent } from './paging/paging-scrolling-novirtualization.component';
import { ServerPagingComponent } from './paging/paging-server.component';
import { VirtualPagingComponent } from './paging/paging-virtual.component';
import { ServerScrollingComponent } from './paging/scrolling-server.component';
// -- Selection
import { CellSelectionComponent } from './selection/selection-cell.component';
import { CustomCheckboxSelectionComponent } from './selection/selection-chkbox-template.component';
import { CheckboxSelectionComponent } from './selection/selection-chkbox.component';
import { MultiDisableSelectionComponent } from './selection/selection-disabled.component';
import { MultiClickSelectionComponent } from './selection/selection-multi-click.component';
import { MultiSelectionComponent } from './selection/selection-multi.component';
import { SingleSelectionComponent } from './selection/selection-single.component';
import { ClientSortingComponent } from './sorting/sorting-client.component';
// -- Sorting
import { SortingComparatorComponent } from './sorting/sorting-comparator.component';
import { DefaultSortingComponent } from './sorting/sorting-default.component';
import { ServerSortingComponent } from './sorting/sorting-server.component';
import { SummaryRowCustomTemplateComponent } from './summary/summary-row-custom-template.component';
import { SummaryRowInlineHtmlComponent } from './summary/summary-row-inline-html.component';
import { SummaryRowServerPagingComponent } from './summary/summary-row-server-paging.component';
// -- Summary row
import { SummaryRowSimpleComponent } from './summary/summary-row-simple.component';
// -- Templates
import { InlineTemplatesComponent } from './templates/template-dom.component';
import { TemplateRefTemplatesComponent } from './templates/template-obj.component';
import { ClientTreeComponent } from './tree/client-tree.component';
// -- Tree
import { FullScreenTreeComponent } from './tree/fullscreen.component';











@NgModule({
  declarations: [
    AppComponent,
    BasicAutoComponent,
    BasicFixedComponent,
    FullScreenComponent,
    FullScreenTreeComponent,
    InlineEditComponent,
    VirtualScrollComponent,
    HorzVertScrolling,
    MultipleTablesComponent,
    RowDetailsComponent,
    ResponsiveComponent,
    ClientPagingComponent,
    ServerPagingComponent,
    PagingScrollingNoVirtualizationComponent,
    ServerScrollingComponent,
    ClientSortingComponent,
    DefaultSortingComponent,
    ServerSortingComponent,
    SortingComparatorComponent,
    CellSelectionComponent,
    MultiSelectionComponent,
    InlineTemplatesComponent,
    TemplateRefTemplatesComponent,
    ColumnFlexComponent,
    ColumnToggleComponent,
    ColumnStandardComponent,
    ColumnForceComponent,
    ColumnPinningComponent,
    ColumnReorderComponent,
    FilterBarComponent,
    VirtualPagingComponent,
    DarkThemeComponent,
    TabsDemoComponent,
    SingleSelectionComponent,
    LiveDataComponent,
    MultiDisableSelectionComponent,
    RxDemoComponent,
    ContextMenuDemoComponent,
    CheckboxSelectionComponent,
    CustomCheckboxSelectionComponent,
    MultiClickSelectionComponent,
    RowCssComponent,
    DynamicHeightComponent,
    FooterDemoComponent,
    RowGroupingComponent,
    BootstrapThemeComponent,
    ClientTreeComponent,
    SummaryRowSimpleComponent,
    SummaryRowCustomTemplateComponent,
    SummaryRowServerPagingComponent,
    SummaryRowInlineHtmlComponent,
    RowDragComponent,
  ],
  imports: [BrowserModule, NgxDatatableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
