export class ButtonStylesModel {
  baseButtonClasses =
    'px-4 py-2 rounded-md text-white transition duration-300 ease-in-out';
  primaryButtonClasses =
    'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 ' +
    this.baseButtonClasses;
  secondaryButtonClasses =
    'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 ' +
    this.baseButtonClasses;
  infoButtonClasses =
    'bg-green-500 hover:bg-green-600 active:bg-green-700 ' +
    this.baseButtonClasses;
  dangerButtonClasses =
    'bg-red-500 hover:bg-red-600 active:bg-red-700 ' + this.baseButtonClasses;
}
