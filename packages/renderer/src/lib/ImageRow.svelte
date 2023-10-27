<script lang="ts">
import { router } from 'tinro';
import ImageActions from './image/ImageActions.svelte';
import type { ImageInfoUI } from './image/ImageInfoUI';
import PushImageModal from './image/PushImageModal.svelte';
import RenameImageModal from './image/RenameImageModal.svelte';
import ImageIcon from './images/ImageIcon.svelte';
import StatusIcon from './images/StatusIcon.svelte';

export let object: any;
export let column: string;

$: image = object;

export let multipleEngines = false; // TODO

function openDetailsImage(image: ImageInfoUI) {
  router.goto(`/images/${image.id}/${image.engineId}/${image.base64RepoTag}/summary`);
}

let pushImageModal = false;
let pushImageModalImageInfo: ImageInfoUI | undefined = undefined;
function handlePushImageModal(imageInfo: ImageInfoUI) {
  pushImageModalImageInfo = imageInfo;
  pushImageModal = true;
}

let renameImageModal = false;
let renameImageModalImageInfo: ImageInfoUI | undefined = undefined;
function handleRenameImageModal(imageInfo: ImageInfoUI) {
  renameImageModalImageInfo = imageInfo;
  renameImageModal = true;
}

function closeModals() {
  pushImageModal = false;
  renameImageModal = false;
}
</script>

{#if column === 'Status'}
  <td class="flex flex-row justify-center content-center h-12">
    <div class="grid place-content-center ml-3 mr-4">
      <StatusIcon icon="{ImageIcon}" status="{image.inUse ? 'USED' : 'UNUSED'}" />
    </div>
  </td>
{:else if column === 'Name'}
  <td class="whitespace-nowrap w-10 hover:cursor-pointer" on:click="{() => openDetailsImage(image)}">
    <div class="flex items-center">
      <div class="">
        <div class="flex flex-row items-center">
          <div class="text-sm text-gray-300">{image.name}</div>
        </div>
        <div class="flex flex-row items-center">
          <div class="text-xs text-violet-400">{image.shortId}</div>
          <div class="ml-1 text-xs font-extra-light text-gray-400">{image.tag}</div>
        </div>
        <div class="flex flex-row text-xs font-extra-light text-gray-900">
          <!-- Hide in case of single engine-->
          {#if multipleEngines}
            <div class="px-2 inline-flex text-xs font-extralight rounded-full bg-slate-800 text-slate-400">
              {image.engineName}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </td>
{:else if column === 'Age'}
  <td class="px-6 whitespace-nowrap w-10">
    <div class="flex items-center">
      <div class="text-sm text-gray-700">{image.age}</div>
    </div>
  </td>
{:else if column === 'Size'}
  <td class="px-6 whitespace-nowrap w-10">
    <div class="flex">
      <div class="w-full text-right text-sm text-gray-700">{image.humanSize}</div>
    </div>
  </td>
{:else}
  <ImageActions
    image="{image}"
    onPushImage="{handlePushImageModal}"
    onRenameImage="{handleRenameImageModal}"
    dropdownMenu="{true}" />
{/if}
{#if pushImageModal && pushImageModalImageInfo}
  <PushImageModal
    imageInfoToPush="{pushImageModalImageInfo}"
    closeCallback="{() => {
      closeModals();
    }}" />
{/if}
{#if renameImageModal && renameImageModalImageInfo}
  <RenameImageModal
    imageInfoToRename="{renameImageModalImageInfo}"
    closeCallback="{() => {
      closeModals();
    }}" />
{/if}
