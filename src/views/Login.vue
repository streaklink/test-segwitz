<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mt-md-0">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                  <br />
                  Username- admin / Password - admin@007
                </p>
                <form @submit.prevent="Login">
                  <div class="form-outline form-white mb-3">
                    <!-- <label class="form-label">Email</label> -->
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Username"
                      v-model="usernameData"
                    />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <!-- <label class="form-label">Password</label> -->
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      v-model="passwordData"
                    />
                  </div>
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
// import router from "./../router";
import store from "./../store";
export default {
  name: "Login",
  setup() {
    const usernameData = ref("admin");
    const passwordData = ref("admin@007");
    const Login = () => {
      let username = usernameData.value;
      let password = passwordData.value;
      if (username && password) {
        store.dispatch("login", { username, password });
      } else {
        alert("Input field Empty");
      }
    };
    return {
      usernameData,
      passwordData,
      Login,
    };
  },
};
</script>
<style lang="scss" scoped>
.gradient-custom {
  background: #6a11cb;
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(82, 13, 156, 1)
  );
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(82, 13, 156, 1)
  );
  .btn-outline-light {
    width: 100%;
  }
}
</style>
