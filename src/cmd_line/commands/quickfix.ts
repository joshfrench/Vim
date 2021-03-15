import * as vscode from 'vscode';

import * as node from '../node'
import { VimState } from '../../state/vimState';

export class CopenCommand extends node.CommandBase {
  async execute(vimState: VimState): Promise<void> {
    await vscode.commands.executeCommand('workbench.actions.view.problems');
  }
}

export class CcloseCommand extends node.CommandBase {
  async execute(vimState: VimState): Promise<void> {
    await vscode.commands.executeCommand('workbench.action.closePanel')
  }
}