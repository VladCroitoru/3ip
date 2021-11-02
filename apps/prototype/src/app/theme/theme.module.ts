import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

const MODULES = [
  NzAvatarModule,
  NzFormModule,
  NzInputModule,
  ReactiveFormsModule,
  FormsModule,
  NzLayoutModule,
  NzMenuModule,
  NzButtonModule,
  NzTypographyModule,
  NzGridModule,
  NzAlertModule,
  NzToolTipModule,
  NzSpaceModule,
  NzIconModule,
  NzSwitchModule,
  NzListModule,
  NzTableModule,
  NzPopconfirmModule,
  NzSelectModule,
  NzRadioModule,
  NzSkeletonModule,
  NzUploadModule,
  NzModalModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzMessageModule,
  NzPaginationModule,
  NzTreeModule,
  NzCollapseModule,
];

@NgModule({
  exports: [...MODULES],
})
export class ThemeModule {}
