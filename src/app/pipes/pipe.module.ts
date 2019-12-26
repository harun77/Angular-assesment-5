import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SearchByKeyPipe } from "./search-by-key.pipe";
import { DiffPipe } from './diff-of-array.pipe';
import { IntercectionPipe } from './intersection-of-array.pipe';

@NgModule({
    declarations: [SearchByKeyPipe, DiffPipe, IntercectionPipe],
    imports: [CommonModule],
    exports: [SearchByKeyPipe, DiffPipe, IntercectionPipe]
})

export class PipeModule { }