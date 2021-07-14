import { AccessTypes } from '../../../data/AccessTypes';
import DataAccess from '../../../data/DataAccess';
import { DataTypes } from '../../../data/DataTypes';
import InputManager from '../../../io/InputManager';
import OutputManager from '../../../io/OutputManager';
import NComplexNumber from '../../../math/primitive/NComplexNumber';
import NodeBase from '../../NodeBase';

export default class Ceil extends NodeBase {
  get displayName (): string {
    return 'Ceil';
  }

  public registerInputs (manager: InputManager): void {
    manager.add('i', 'Input value', DataTypes.NUMBER, AccessTypes.ITEM);
  }

  public registerOutputs (manager: OutputManager): void {
    manager.add('o', 'Output value', DataTypes.NUMBER, AccessTypes.ITEM);
  }

  public solve (access: DataAccess): void {
    const n = access.getData(0);
    access.setData(0, Math.ceil(n));
  }
}
