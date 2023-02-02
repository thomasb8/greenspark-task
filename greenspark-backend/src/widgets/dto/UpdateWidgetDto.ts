import { IsBoolean, IsIn } from "class-validator";
import { OrderedColors } from "../widget.entity";
import { PartialType } from "@nestjs/mapped-types";

class UpdateWidgetDto  {
  @IsBoolean()
  active: boolean;

  @IsBoolean()
  linked: boolean;

  @IsIn(OrderedColors)
  selectedColor: string;
}

export default class PartialUpdateWidgetDto extends PartialType(UpdateWidgetDto) {}
