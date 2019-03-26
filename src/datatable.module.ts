import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DatatableComponent, DataTableFooterComponent, DatatableFooterDirective, DataTableFooterTemplateDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, ProgressBarComponent, ScrollerComponent } from './components';
import { DraggableDirective, LongPressDirective, OrderableDirective, ResizeableDirective, VisibilityDirective } from './directives';
import { ColumnChangesService, DimensionsHelper, ScrollbarHelper } from './services';

@NgModule({
  imports: [CommonModule, DragDropModule],
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  declarations: [
    DataTableFooterTemplateDirective,
    VisibilityDirective,
    DraggableDirective,
    ResizeableDirective,
    OrderableDirective,
    LongPressDirective,
    ScrollerComponent,
    DatatableComponent,
    DataTableColumnDirective,
    DataTableHeaderComponent,
    DataTableHeaderCellComponent,
    DataTableBodyComponent,
    DataTableFooterComponent,
    DataTablePagerComponent,
    ProgressBarComponent,
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
    DatatableRowDetailTemplateDirective,
    DataTableBodyCellComponent,
    DataTableSelectionComponent,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCellTreeToggle,
    DatatableFooterDirective,
    DatatableGroupHeaderTemplateDirective,
    DataTableSummaryRowComponent,
  ],
  exports: [
    DragDropModule,
    DatatableComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
    DatatableRowDetailTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCellTreeToggle,
    DataTableFooterTemplateDirective,
    DatatableFooterDirective,
    DataTablePagerComponent,
    DatatableGroupHeaderTemplateDirective,
  ],
})
export class NgxDatatableModule {}
