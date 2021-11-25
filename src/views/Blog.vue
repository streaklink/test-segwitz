<template>
  <div id="body-pd">
    <HeaderMenu />
    <div class="bg-light">
      <Breadcrumb :breadcrumb="breadcrumb" />
      <div class="card shadow-sm">
        <div class="card-body">
          <div class="btn-block" style="text-align: right">
            <button
              type="button"
              class="btn btn-success btn-sm mb-3"
              @click="toggleModal"
            >
              Add Blog
            </button>
          </div>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
            :search-options="{
              enabled: true,
              placeholder: 'Search this table',
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
            }"
            class="blogTable"
          >
            <template v-slot:table-row="props" style="w">
              <span v-if="props.column.field == 'before'" class="imageData">
                <img :src="props.row.image" />
              </span>
              <span v-if="props.column.field == 'after'">
                <button
                  class="btn btn-info btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#blogShow"
                  @click="blogData(props.row)"
                >
                  <i class="bi bi-eye"></i>
                </button>
                <button
                  class="btn btn-danger btn-sm ms-1"
                  type="button"
                  @click="removeClick(props.row.originalIndex)"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
    <!-- Add Blog -->
    <div
      class="modal fade"
      :class="modal"
      ref="isOpen"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div
        class="
          modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable
        "
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Blog</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Blog Name *</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.name"
                    @input="urlAdd(blog.name)"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Blog Link *</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.url"
                    readonly
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Blog Image Link *</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.image"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Meta Title (70 characters)</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.meta_title"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label"
                    >Meta Description (160 characters)</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.meta_des"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Meta Key Word (10 keyword)</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.meta_key"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="form-label">Small Content *</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="blog.small_content"
                  />
                </div>
                <div class="col-md-12">
                  <label class="form-label">Long Content *</label>
                  <textarea
                    type="text"
                    class="form-control"
                    rows="2"
                    v-model="blog.long_content"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="AddBlog"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- View Blog -->
    <div
      class="modal fade"
      id="blogShow"
      tabindex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">{{ blog2.name }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card">
              <img :src="blog2.image" class="card-img-top" :alt="blog2.name" />
              <div class="card-body">
                <h4 class="card-title">{{ blog2.small_content }}</h4>
                <p class="card-text">{{ blog2.long_content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import store from "./../store";
import { Modal } from "bootstrap";
export default {
  name: "Dashboard",
  setup() {
    const isOpen = ref(null);
    const modal = ref("");
    const toggleModal = () => {
      modal.value = new Modal(isOpen.value).show();
    };
    const breadcrumb = ref([{ name: "Blogs", class: "active" }]);
    // Blogs List
    const blog = ref({
      name: null,
      url: null,
      image: null,
      meta_title: null,
      meta_des: null,
      meta_key: null,
      small_content: null,
      long_content: null,
    });
    const blog2 = ref({
      name: null,
      url: null,
      image: null,
      meta_title: null,
      meta_des: null,
      meta_key: null,
      small_content: null,
      long_content: null,
    });
    const blogData = (data) => {
      blog2.value.name = data.name;
      blog2.value.url = data.url;
      blog2.value.image = data.image;
      blog2.value.meta_title = data.meta_title;
      blog2.value.meta_des = data.meta_des;
      blog2.value.meta_key = data.meta_key;
      blog2.value.small_content = data.small_content;
      blog2.value.long_content = data.long_content;
    };
    const rows = computed(() => {
      return store.state.blogList === null ? [] : store.state.blogList;
    });
    // Add Link
    const urlAdd = (data) => {
      let str = data;
      blog.value.url = str.toLowerCase().trim().split(/\s+/).join("-");
    };
    // Remove
    const removeClick = (data) => {
      store.dispatch("removeClick", data);
    };
    //Add Blog
    const AddBlog = () => {
      if (
        blog.value.name &&
        blog.value.url &&
        blog.value.image &&
        blog.value.small_content &&
        blog.value.long_content
      ) {
        modal.value = new Modal(isOpen.value).hide();
        console.log(new Modal(isOpen.value).hide());
        store.dispatch("addBlog", blog.value);
      } else {
        alert("Input field Empty");
      }
    };
    return {
      isOpen,
      modal,
      toggleModal,
      breadcrumb,
      blog,
      blog2,
      AddBlog,
      urlAdd,
      removeClick,
      columns: [
        {
          label: "Image",
          field: "before",
          width: "150px",
        },
        {
          label: "Name",
          field: "name",
        },
        {
          label: "URL",
          field: "url",
        },
        {
          label: "Small Content",
          field: "small_content",
        },
        {
          label: "Meta Title",
          field: "meta_title",
        },
        {
          label: "Meta Description",
          field: "meta_des",
        },
        {
          label: "Meta Key Word",
          field: "meta_key",
        },
        {
          label: "Actions",
          field: "after",
        },
      ],
      rows,
      blogData,
    };
  },
};
</script>
<style lang="scss">
.blogTable {
  .vgt-inner-wrap {
    .vgt-responsive {
      table.vgt-table {
        font-size: 12px !important;
        td {
          img {
            width: 50% !important;
          }
        }
      }
    }
  }
}
</style>
