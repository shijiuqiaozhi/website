<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    stripe
  >
    <template #empty>
      <el-empty
        :image-size="50"
        style="padding-bottom: 0"
      ></el-empty>
      <span>暂无数据</span>
    </template>
    <el-table-column
      prop="name"
      label="委托单号"
      width="180"
      fixed="left"
    />
    <el-table-column
      prop="unitName"
      label="委托单位名称"
      width="180"
      fixed="left"
    />
    <el-table-column
      prop="userName"
      label="委托单位联系人"
      width="180"
    />
    <el-table-column
      prop="region"
      label="委托地点"
      width="180"
    />
    <el-table-column
      prop="date1"
      label="委托时间"
      width="180"
    />
    <el-table-column
      prop="delivery"
      label="是否交付"
      width="180"
    />
    <el-table-column
      prop="type"
      label="委托类型"
      width="180"
    />
    <el-table-column
      prop="resource"
      label="委托来源"
      width="180"
    />
    <el-table-column
      prop="desc"
      label="委托内容"
      width="180"
    />
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1"
  />
</template>

<script>
export default {
  name: 'authorizeTable',
  data() {
    return {
      total: '',
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    };
  },
  mounted() {
    this.tableData = JSON.parse(sessionStorage.getItem('tableData'));
    this.total = sessionStorage.getItem('total');
  },
};
</script>

<style
  lang="scss"
  scoped
>
:deep(.el-table__row--striped td) {
  background: #ecf5ff;
}

.el-table {
  --el-table-row-hover-bg-color: #c6e2ff;
  --el-table-header-bg-color: #a0cfff;
}

.background-color {
  background-color: white;
}

.el-pagination {
  justify-content: center;
  margin-top: 10px;
}

:deep(.el-empty__description) {
  display: none;
}
</style>
