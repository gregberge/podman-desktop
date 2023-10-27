<script lang="ts">
import Checkbox from '../ui/Checkbox.svelte';
import type { Column, TableHelper } from './table';
import { flip } from 'svelte/animate';

export let objects: any[];
export let columns: Column[];
export let row: any;
export let info: TableHelper;

// number of selected items in the list
export let selectedItemsNumber: number = 0;
$: selectedItemsNumber = objects.filter(object => !info.selectable(object)).filter(object => object.selected).length;

// do we need to unselect all checkboxes if we don't have all items being selected ?
$: selectedAllCheckboxes = objects.filter(object => !info.selectable(object)).every(object => object.selected);

function toggleAll(checked: boolean) {
  const toggleObjects = objects;
  toggleObjects.filter(object => !info.selectable(object)).forEach(object => (object.selected = checked));
  objects = toggleObjects;
}

let sortCol: string;
let sortDir: boolean;

function sort(column: string) {
  if (sortCol === column) {
    sortDir = !sortDir;
  } else {
    sortCol = column;
    sortDir = false;
  }
  let comparator = info.compare(column);
  if (sortDir) {
    // we're already sorted, switch to reverse order
    let comparatorTemp = comparator;
    comparator = (a, b) => -comparatorTemp(a, b);
  }
  const sortedObjects = objects;
  sortedObjects.sort(comparator);
  objects = sortedObjects;
}
</script>

<table class="mx-5 w-full h-fit" class:hidden="{objects.length === 0}">
  <thead class="sticky top-0 bg-charcoal-700 z-[2]">
    <tr class="h-7 uppercase text-xs text-gray-600">
      <th class="whitespace-nowrap w-5"></th>
      <th class="px-2 w-5">
        <Checkbox
          title="Toggle all"
          bind:checked="{selectedAllCheckboxes}"
          indeterminate="{selectedItemsNumber > 0 && !selectedAllCheckboxes}"
          on:click="{event => toggleAll(event.detail)}" />
      </th>
      {#each columns as col}
        <th
          class="whitespace-nowrap {col.align === 'right' ? 'text-end' : ''}{col.align === 'center'
            ? 'text-center'
            : ''} {col.width} {col.pad}"
          on:click="{() => sort(col.title)}">{col.title}</th>
      {/each}
      <th class="text-right pr-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each objects as object (object.name)}
      <tr class="group h-12 bg-charcoal-800 hover:bg-zinc-700" animate:flip="{{ duration: 300 }}">
        <td class="rounded-tl-lg rounded-bl-lg w-5"> </td>
        <td class="">
          <Checkbox
            title="Toggle {info.type}"
            bind:checked="{object.selected}"
            disabled="{info.selectable(object)}"
            disabledTooltip="{info.disabledText()}}" />
        </td>
        {#each columns as col}
          <svelte:component this="{row}" object="{object}" column="{col.title}" />
        {/each}

        <td class="text-right whitespace-nowrap rounded-tr-lg rounded-br-lg">
          <svelte:component this="{row}" object="{object}" column="Actions" />
        </td>
      </tr>
      <!--- TODO leading tr was here-->
    {/each}
    <tr><td class="leading-[8px]">&nbsp;</td></tr>
  </tbody>
</table>
