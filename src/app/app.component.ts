import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preference';

  currentTab: String = 'user';
  selectTab(tab: String) {
    this.currentTab = tab;
  }

  userMenuNodes = [
    {
      id: 1,
      name: 'Commonly Used'
    },
    {
      id: 2,
      name: 'Text Editor',
      children: [
        { id: 3, name: 'Cursor'},
        { id: 4, name: 'Find'},
        { id: 5, name: 'Font'},
        { id: 6, name: 'Formatting'},
        { id: 7, name: 'Diff Editor'},
        { id: 8, name: 'Minimap'},
        { id: 9, name: 'Suggestions'},
        { id: 10, name: 'Files'}
      ]
    },
    {
      id: 11,
      name: 'Workbench',
      children: [
        { id: 12, name: 'Appearance'},
        { id: 13, name: 'Breadcrumbs'},
        { id: 14, name: 'Editor Management'},
        { id: 15, name: 'Setting Editor'},
        { id: 16, name: 'Zen Mode'},
        { id: 17, name: 'Screencast Mode'}
      ]
    },
    {
      id: 18,
      name: 'Window',
      children: [
        { id: 19, name: 'New window'},
      ]
    },
    {
      id: 20,
      name: 'Features',
      children: [
        { id: 21, name: 'Explorer'},
        { id: 22, name: 'Search'},
        { id: 23, name: 'Debug'},
        { id: 24, name: 'Testing'},
        { id: 25, name: 'SCM'},
        { id: 26, name: 'Extensions'},
        { id: 27, name: 'Terminal'},
        { id: 28, name: 'Task'},
        { id: 29, name: 'Problems'},
        { id: 30, name: 'Output'},
        { id: 31, name: 'Comments'},
        { id: 32, name: 'Remote'},
        { id: 33, name: 'Timeline'},
        { id: 34, name: 'Notebook'}
      ]
    },
    {
      id: 35,
      name: 'Application',
      children: [
        { id: 36, name: 'Proxy'},
        { id: 37, name: 'Keyboard'},
        { id: 38, name: 'Update'},
        { id: 39, name: 'Telemetry'},
        { id: 40, name: 'Setting Sync'}
      ]
    },
    {
      id: 41,
      name: 'Extensions',
      children: [
        { id: 42, name: 'Color Picker configuration'},
        { id: 43, name: 'CSS'},
        { id: 44, name: 'Dart & Flutter'},
        { id: 45, name: 'Docker'},
        { id: 46, name: 'Draw.io Intergration'},
        { id: 47, name: 'Emmet'},
        { id: 48, name: 'Emulator Configuration'},
        { id: 49, name: 'Git'},
        { id: 50, name: 'Git Config User Profile'},
        { id: 51, name: 'GitHub'},
        { id: 52, name: 'Grunt'},
        { id: 53, name: 'Gulp'},
        { id: 54, name: 'HTML'},
        { id: 55, name: 'Docker'},
        { id: 56, name: 'Jake'},
        { id: 57, name: 'JavaScript Debug'},
        { id: 58, name: 'JSON'},
        { id: 59, name: 'Live Sever Config'},
        { id: 60, name: 'Markdown'},
        { id: 61, name: 'Merge Conflict'},
        { id: 62, name: 'Node debug'},
        { id: 63, name: 'Npm'},
        { id: 64, name: 'PHP'},
        { id: 65, name: 'Reference Search View'},
        { id: 66, name: 'Remote - Containers'},
        { id: 67, name: 'SCSS (Sass'},
        { id: 68, name: 'Simple Browser'},
        { id: 69, name: 'Testing'},
        { id: 70, name: 'TypeScript'},
        { id: 71, name: 'vscode-icons configuration'},
      ]
    },
  ];

  workspaceMenuNodes = [
    {
      id: 1,
      name: 'Commonly Used'
    },
    {
      id: 2,
      name: 'Text Editor',
      children: [
        { id: 3, name: 'Cursor'},
        { id: 4, name: 'Find'},
        { id: 5, name: 'Font'},
        { id: 6, name: 'Formatting'},
        { id: 7, name: 'Diff Editor'},
        { id: 8, name: 'Minimap'},
        { id: 9, name: 'Suggestions'},
        { id: 10, name: 'Files'}
      ]
    },
    {
      id: 11,
      name: 'Workbench',
      children: [
        { id: 12, name: 'Appearance'},
        { id: 13, name: 'Breadcrumbs'},
        { id: 14, name: 'Editor Management'},
        { id: 15, name: 'Setting Editor'},
        { id: 16, name: 'Zen Mode'},
        { id: 17, name: 'Screencast Mode'}
      ]
    },
    {
      id: 18,
      name: 'Window',
    },
    {
      id: 19,
      name: 'Features',
      children: [
        { id: 20, name: 'Explorer'},
        { id: 21, name: 'Search'},
        { id: 22, name: 'Debug'},
        { id: 23, name: 'Testing'},
        { id: 24, name: 'SCM'},
        { id: 25, name: 'Extensions'},
        { id: 26, name: 'Terminal'},
        { id: 27, name: 'Task'},
        { id: 28, name: 'Problems'},
        { id: 29, name: 'Output'},
        { id: 30, name: 'Comments'},
        { id: 31, name: 'Remote'},
        { id: 32, name: 'Timeline'},
        { id: 33, name: 'Notebook'}
      ]
    },
    {
      id: 34,
      name: 'Application',
      children: [
        { id: 35, name: 'Proxy'},
        { id: 36, name: 'Keyboard'},
        { id: 37, name: 'Update'},
        { id: 38, name: 'Telemetry'},
        { id: 39, name: 'Setting Sync'}
      ]
    },
    {
      id: 40,
      name: 'Extensions',
      children: [
        { id: 41, name: 'Color Picker configuration'},
        { id: 42, name: 'CSS'},
        { id: 43, name: 'Dart & Flutter'},
        { id: 44, name: 'Docker'},
        { id: 45, name: 'Draw.io Intergration'},
        { id: 46, name: 'Emmet'},
        { id: 47, name: 'Emulator Configuration'},
        { id: 48, name: 'Git'},
        { id: 49, name: 'Git Config User Profile'},
        { id: 50, name: 'GitHub'},
        { id: 51, name: 'Grunt'},
        { id: 52, name: 'Gulp'},
        { id: 53, name: 'HTML'},
        { id: 54, name: 'Docker'},
        { id: 55, name: 'Jake'},
        { id: 56, name: 'JavaScript Debug'},
        { id: 57, name: 'JSON'},
        { id: 58, name: 'Live Sever Config'},
        { id: 59, name: 'Markdown'},
        { id: 60, name: 'Merge Conflict'},
        { id: 61, name: 'Node debug'},
        { id: 62, name: 'Npm'},
        { id: 63, name: 'PHP'},
        { id: 64, name: 'Reference Search View'},
        { id: 65, name: 'Remote - Containers'},
        { id: 66, name: 'SCSS (Sass'},
        { id: 67, name: 'Simple Browser'},
        { id: 68, name: 'Testing'},
        { id: 69, name: 'TypeScript'},
        { id: 70, name: 'vscode-icons configuration'},
      ]
    },
  ];
  
  options = {};

}
