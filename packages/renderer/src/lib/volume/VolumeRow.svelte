<script lang="ts">
import { router } from 'tinro';
import StatusIcon from '../images/StatusIcon.svelte';
import VolumeIcon from '../images/VolumeIcon.svelte';
import VolumeActions from './VolumeActions.svelte';
import type { VolumeInfoUI } from './VolumeInfoUI';

export let object: any;
export let column: string;

function openDetailsVolume(volume: VolumeInfoUI) {
  router.goto(`/volumes/${encodeURI(volume.name)}/${encodeURI(volume.engineId)}/summary`);
}
</script>

{#if column === 'Status'}
  <td class="flex flex-row justify-center h-12">
    <div class="grid place-content-center ml-3 mr-4">
      <StatusIcon icon="{VolumeIcon}" status="{object.inUse ? 'USED' : 'UNUSED'}" />
    </div>
  </td>
{:else if column === 'Name'}
  <td class="whitespace-nowrap w-10 hover:cursor-pointer" on:click="{() => openDetailsVolume(object)}">
    <div class="flex items-center">
      <div class="flex flex-row items-center">
        <div class="text-sm text-gray-300">{object.shortName}</div>
      </div>
    </div>
  </td>
{:else if column === 'Age'}
  <td class="px-6 whitespace-nowrap w-10">
    <div class="flex items-center">
      <div class="text-sm text-gray-700">{object.age}</div>
    </div>
  </td>
{:else if column === 'Size'}
  <td class="px-6 whitespace-nowrap w-10">
    <div class="flex">
      <div class="w-full text-right text-sm text-gray-700">{object.humanSize}</div>
    </div>
  </td>
{:else}
  <VolumeActions volume="{object}" />
{/if}
