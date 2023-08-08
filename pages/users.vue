<template>
  <h1>user nest page</h1>
  <p>
    pageディレクトリ直下にusers.vueを作成するとusersディレクトリ配下のファイルは参照されなくなる
  </p>
  <p>users.vueに、NuxtPageを追加すると参照される</p>
  <p>ただし、/usersで、usersディレクトリ直下の内容も表示されてしまう</p>
  <NuxtPage />
</template>
