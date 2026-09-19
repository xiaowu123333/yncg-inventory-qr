// ===== 配置文件 =====
// 数据由你本地的 uploader.py 每日 08:20 自动上传到腾讯云 COS，手机扫码跨域读取最新值。
// Gitee Pages 仅托管本页面（静态），不含数据，故仓库可公开、无敏感信息泄露。
window.APP_CONFIG = {
  title: "YNCG 废物料库存查询",
  viewPassword: "8888",   // ← 建议改成你自己的口令（前端校验，仅挡随手扫的外人）
  unit: "kg",
  // 远程数据源（自动同步模式）：腾讯云 COS 上 inventory.json 的访问地址。
  dataUrl: "https://yncg-inventory-597012609-1475230503.cos.ap-guangzhou.myqcloud.com/inventory.json"
};
