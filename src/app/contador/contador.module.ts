import { NgModule } from "@angular/core";

// components
import { ContadorComponent } from "./contador/contador-increible.component";

@NgModule({
    declarations: [ContadorComponent],
    exports: [ContadorComponent],
})

export class ContadorModule {}