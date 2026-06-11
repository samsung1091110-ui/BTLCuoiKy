const STORAGE_KEY = "drinkdb-gui-state-v1";

const initialData = {
    categories: [
        { idLoaiSP: 1, TenLoai: "Trà sữa", MoTa: "Đồ uống trà sữa" },
        { idLoaiSP: 2, TenLoai: "Cà phê", MoTa: "Đồ uống cà phê" },
        { idLoaiSP: 3, TenLoai: "Nước ép", MoTa: "Đồ uống nước ép" },
        { idLoaiSP: 4, TenLoai: "Nước ngọt", MoTa: "Đồ uống nước ngọt" },
        { idLoaiSP: 5, TenLoai: "Sinh tố", MoTa: "Đồ uống sinh tố" },
        { idLoaiSP: 6, TenLoai: "Thức uống khác", MoTa: "Đồ uống khác" },
    ],
    products: [
        { idSanPham: 1, TenSanPham: "Trà sữa Matcha", DonGia: 35000, SoLuongTon: 50, DonViTinh: "Ly", idLoaiSP: 1 },
        { idSanPham: 2, TenSanPham: "Cà phê đen", DonGia: 25000, SoLuongTon: 40, DonViTinh: "Ly", idLoaiSP: 2 },
        { idSanPham: 3, TenSanPham: "Nước ép táo", DonGia: 35000, SoLuongTon: 30, DonViTinh: "Ly", idLoaiSP: 3 },
        { idSanPham: 4, TenSanPham: "Coca-Cola", DonGia: 15000, SoLuongTon: 25, DonViTinh: "Lon", idLoaiSP: 4 },
        { idSanPham: 5, TenSanPham: "Sinh tố bơ", DonGia: 40000, SoLuongTon: 20, DonViTinh: "Ly", idLoaiSP: 5 },
        { idSanPham: 6, TenSanPham: "Revice chanh muối", DonGia: 12000, SoLuongTon: 15, DonViTinh: "Ly", idLoaiSP: 6 },
        { idSanPham: 7, TenSanPham: "Bia", DonGia: 17000, SoLuongTon: 34, DonViTinh: "Cốc", idLoaiSP: 6 },
        { idSanPham: 8, TenSanPham: "Bạc xỉu", DonGia: 25000, SoLuongTon: 25, DonViTinh: "Cốc", idLoaiSP: 2 },
        { idSanPham: 9, TenSanPham: "Trà sữa Thái", DonGia: 30000, SoLuongTon: 20, DonViTinh: "Ly", idLoaiSP: 1 },
        { idSanPham: 10, TenSanPham: "Trà sữa Trân châu đường đen", DonGia: 25000, SoLuongTon: 25, DonViTinh: "Ly", idLoaiSP: 1 },
        { idSanPham: 11, TenSanPham: "Cà phê phin", DonGia: 30000, SoLuongTon: 30, DonViTinh: "Ly", idLoaiSP: 2 },
        { idSanPham: 12, TenSanPham: "Nước ép cam", DonGia: 25000, SoLuongTon: 21, DonViTinh: "Ly", idLoaiSP: 3 },
        { idSanPham: 13, TenSanPham: "Nước ép lê", DonGia: 25000, SoLuongTon: 25, DonViTinh: "Ly", idLoaiSP: 3 },
        { idSanPham: 14, TenSanPham: "Nước ép dâu", DonGia: 25000, SoLuongTon: 20, DonViTinh: "Ly", idLoaiSP: 3 },
        { idSanPham: 15, TenSanPham: "Nước ép thanh long", DonGia: 30000, SoLuongTon: 15, DonViTinh: "Ly", idLoaiSP: 3 },
        { idSanPham: 16, TenSanPham: "Sinh tố dâu", DonGia: 40000, SoLuongTon: 29, DonViTinh: "Ly", idLoaiSP: 5 },
        { idSanPham: 17, TenSanPham: "Pepsi", DonGia: 15000, SoLuongTon: 25, DonViTinh: "Lon", idLoaiSP: 4 },
        { idSanPham: 18, TenSanPham: "7-up", DonGia: 15000, SoLuongTon: 25, DonViTinh: "Lon", idLoaiSP: 4 },
        { idSanPham: 19, TenSanPham: "Sprite", DonGia: 15000, SoLuongTon: 25, DonViTinh: "Lon", idLoaiSP: 4 },
    ],
    customers: [
        { idKhachHang: 1, HoTen: "Mai Hoàng Phúc", SoDienThoai: "0971860284", DiaChi: "Nam Định" },
        { idKhachHang: 2, HoTen: "Phạm Quốc Thái", SoDienThoai: "0912345678", DiaChi: "Hà Nội" },
        { idKhachHang: 3, HoTen: "Đỗ Văn Toàn", SoDienThoai: "0987654321", DiaChi: "Hà Nội" },
        { idKhachHang: 4, HoTen: "Nguyễn Văn Nam", SoDienThoai: "0909090909", DiaChi: "Đà Nẵng" },
        { idKhachHang: 5, HoTen: "Lê Thị Mai", SoDienThoai: "0911111111", DiaChi: "Huế" },
        { idKhachHang: 6, HoTen: "Phạm Văn Hùng", SoDienThoai: "0922222222", DiaChi: "Cần Thơ" },
        { idKhachHang: 7, HoTen: "Hoàng Thị Hương", SoDienThoai: "0933333333", DiaChi: "Vinh" },
        { idKhachHang: 8, HoTen: "Đỗ Văn Tùng", SoDienThoai: "0944444444", DiaChi: "Pleiku" },
        { idKhachHang: 9, HoTen: "Phạm Quốc Thịnh", SoDienThoai: "0912345678", DiaChi: "Hà Nội" },
        { idKhachHang: 10, HoTen: "Lương Hồng Trang", SoDienThoai: "0912345678", DiaChi: "Cao Bằng" },
        { idKhachHang: 11, HoTen: "Dư Tuấn Anh", SoDienThoai: "0912343448", DiaChi: "Hà Nội" },
        { idKhachHang: 12, HoTen: "Nguyễn Văn A", SoDienThoai: "0912349818", DiaChi: "Hải Phòng" },
    ],
    employees: [
        { idNhanVien: 1, TenNhanVien: "Đỗ Văn Toàn", ChucVu: "Quản lý" },
        { idNhanVien: 2, TenNhanVien: "Phạm Thị D", ChucVu: "Nhân viên pha chế" },
        { idNhanVien: 3, TenNhanVien: "Trần Văn E", ChucVu: "phục vụ bàn" },
        { idNhanVien: 4, TenNhanVien: "Nguyễn Thị F", ChucVu: "phục vụ bàn" },
        { idNhanVien: 5, TenNhanVien: " Lê Văn G", ChucVu: "phục vụ bàn" },
        { idNhanVien: 6, TenNhanVien: "Phạm Thị H", ChucVu: "phục vụ bàn" },
        { idNhanVien: 7, TenNhanVien: "Trần Văn I", ChucVu: "phục vụ bàn" },
        { idNhanVien: 8, TenNhanVien: "Nguyễn Thị J", ChucVu: "phục vụ bàn" },
        { idNhanVien: 9, TenNhanVien: " Lê Văn K", ChucVu: "Thu ngân" },
        { idNhanVien: 10, TenNhanVien: "Phạm Thị L", ChucVu: "phục vụ bàn" },
        { idNhanVien: 11, TenNhanVien: "Mai Hoàng Phúc", ChucVu: "Boss" },
        { idNhanVien: 12, TenNhanVien: "Phạm Quốc Thái", ChucVu: "Quản lý" },
    ],
    orders: [
        { idDonHang: 1, NgayDat: "2026-05-25", TongTien: 330000, TrangThai: "Đã hoàn thành", idKhachHang: 1, idNhanVien: 10 },
        { idDonHang: 2, NgayDat: "2026-05-26", TongTien: 75000, TrangThai: "Đã hủy", idKhachHang: 3, idNhanVien: 3 },
        { idDonHang: 3, NgayDat: "2026-05-26", TongTien: 89000, TrangThai: "Chờ xử lý", idKhachHang: 11, idNhanVien: 4 },
        { idDonHang: 4, NgayDat: "2026-05-26", TongTien: 15000, TrangThai: "Chờ xử lý", idKhachHang: 12, idNhanVien: 2 },
        { idDonHang: 5, NgayDat: "2026-05-27", TongTien: 70000, TrangThai: "Đã hoàn thành", idKhachHang: 5, idNhanVien: 2 },
        { idDonHang: 6, NgayDat: "2026-05-27", TongTien: 60000, TrangThai: "Đã hoàn thành", idKhachHang: 8, idNhanVien: 5 },
        { idDonHang: 7, NgayDat: "2026-05-28", TongTien: 48000, TrangThai: "Đã hoàn thành", idKhachHang: 7, idNhanVien: 2 },
        { idDonHang: 8, NgayDat: "2026-05-28", TongTien: 385000, TrangThai: "Đã hoàn thành", idKhachHang: 6, idNhanVien: 8 },
        { idDonHang: 9, NgayDat: "2026-05-28", TongTien: 12000, TrangThai: "Đã hoàn thành", idKhachHang: 9, idNhanVien: 2 },
        { idDonHang: 11, NgayDat: "2026-05-29", TongTien: 165000, TrangThai: "Đã hoàn thành", idKhachHang: 2, idNhanVien: 4 },
    ],
    orderDetails: [
        { idDonHang: 1, idSanPham: 1, SoLuong: 3, DonGia: 35000, ThanhTien: 105000 },
        { idDonHang: 1, idSanPham: 2, SoLuong: 9, DonGia: 25000, ThanhTien: 225000 },
        { idDonHang: 2, idSanPham: 14, SoLuong: 5, DonGia: 15000, ThanhTien: 75000 },
        { idDonHang: 3, idSanPham: 17, SoLuong: 2, DonGia: 20000, ThanhTien: 40000 },
        { idDonHang: 3, idSanPham: 13, SoLuong: 1, DonGia: 25000, ThanhTien: 25000 },
        { idDonHang: 3, idSanPham: 12, SoLuong: 2, DonGia: 12000, ThanhTien: 24000 },
        { idDonHang: 4, idSanPham: 11, SoLuong: 1, DonGia: 15000, ThanhTien: 15000 },
        { idDonHang: 5, idSanPham: 8, SoLuong: 2, DonGia: 35000, ThanhTien: 70000 },
        { idDonHang: 6, idSanPham: 7, SoLuong: 3, DonGia: 20000, ThanhTien: 60000 },
        { idDonHang: 7, idSanPham: 6, SoLuong: 4, DonGia: 12000, ThanhTien: 48000 },
        { idDonHang: 8, idSanPham: 3, SoLuong: 11, DonGia: 35000, ThanhTien: 385000 },
        { idDonHang: 9, idSanPham: 6, SoLuong: 1, DonGia: 12000, ThanhTien: 12000 },
        { idDonHang: 10, idSanPham: 6, SoLuong: 4, DonGia: 12000, ThanhTien: 48000 },
        { idDonHang: 11, idSanPham: 6, SoLuong: 5, DonGia: 12000, ThanhTien: 60000 },
        { idDonHang: 11, idSanPham: 10, SoLuong: 7, DonGia: 15000, ThanhTien: 105000 },
        { idDonHang: 11, idSanPham: 16, SoLuong: 3, DonGia: 40000, ThanhTien: 120000 },
    ],
};

const tableDefs = {
    dashboard: {
        label: "Tổng quan",
        icon: "dashboard",
    },
    categories: {
        label: "Loại sản phẩm",
        dbName: "LOAI_SAN_PHAM",
        icon: "list",
        idField: "idLoaiSP",
        fields: [
            { key: "idLoaiSP", label: "id loạiSP", type: "number", readonly: true },
            { key: "TenLoai", label: "Tên loại", type: "text", required: true },
            { key: "MoTa", label: "Mô tả", type: "textarea", full: true },
        ],
    },
    products: {
        label: "Sản phẩm",
        dbName: "SAN_PHAM",
        icon: "box",
        idField: "idSanPham",
        fields: [
            { key: "idSanPham", label: "id sản phẩm", type: "number", readonly: true },
            { key: "TenSanPham", label: "Tên sản phẩm", type: "text", required: true },
            { key: "DonGia", label: "Đơn giá", type: "currency", required: true },
            { key: "SoLuongTon", label: "Tồn kho", type: "number", required: true, min: 0 },
            { key: "DonViTinh", label: "Đơn vị tính", type: "text" },
            { key: "idLoaiSP", label: "id loạiSP", type: "lookup", table: "categories", value: "idLoaiSP", text: "TenLoai" },
        ],
    },
    customers: {
        label: "Khách hàng",
        dbName: "KHACH_HANG",
        icon: "user",
        idField: "idKhachHang",
        fields: [
            { key: "idKhachHang", label: "id khách hàng", type: "number", readonly: true },
            { key: "HoTen", label: "Họ tên", type: "text", required: true },
            { key: "SoDienThoai", label: "Số điện thoại", type: "tel" },
            { key: "DiaChi", label: "Địa chỉ", type: "textarea", full: true },
        ],
    },
    employees: {
        label: "Nhân viên",
        dbName: "NHAN_VIEN",
        icon: "briefcase",
        idField: "idNhanVien",
        fields: [
            { key: "idNhanVien", label: "id nhân viên", type: "number", readonly: true },
            { key: "TenNhanVien", label: "Tên nhân viên", type: "text", required: true },
            { key: "ChucVu", label: "Chức vụ", type: "text" },
        ],
    },
    orders: {
        label: "Đơn hàng",
        dbName: "DON_HANG",
        icon: "receipt",
        idField: "idDonHang",
        fields: [
            { key: "idDonHang", label: "id đơn", type: "number", readonly: true },
            { key: "NgayDat", label: "Ngày đặt", type: "date", required: true },
            { key: "TongTien", label: "Tổng tiền", type: "currency" },
            { key: "TrangThai", label: "Trạng thái", type: "select", options: ["Đã hoàn thành", "Chờ xử lý", "Đã hủy"] },
            { key: "idKhachHang", label: "id khách hàng", type: "lookup", table: "customers", value: "idKhachHang", text: "HoTen" },
            { key: "idNhanVien", label: "id nhân viên", type: "lookup", table: "employees", value: "idNhanVien", text: "TenNhanVien" },
        ],
    },
    orderDetails: {
        label: "Chi tiết đơn hàng",
        dbName: "CHI_TIET_DON_HANG",
        icon: "list",
        compositeKey: ["idDonHang", "idSanPham"],
        fields: [
            { key: "idDonHang", label: "id đơn hàng", type: "number", table: "orders", value: "idDonHang", text: "idDonHang", required: true },
            { key: "idSanPham", label: "id sản phẩm", type: "lookup", table: "products", value: "idSanPham", text: "TenSanPham", required: true },
            { key: "SoLuong", label: "Số lượng", type: "number", required: true, min: 1 },
            { key: "DonGia", label: "Đơn giá", type: "currency", required: true },
            { key: "ThanhTien", label: "Thành tiền", type: "currency", readonly: true },
        ],
    },
};

let state = loadState();
let currentView = "dashboard";
let editingRecord = null;
let toastTimer = null;

const navList = document.querySelector("#navList");
const viewTitle = document.querySelector("#viewTitle");
const dashboardView = document.querySelector("#dashboardView");
const tableView = document.querySelector("#tableView");
const tableHead = document.querySelector("#tableHead");
const tableBody = document.querySelector("#tableBody");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const statusFilterWrap = document.querySelector("#statusFilterWrap");
const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const dialog = document.querySelector("#recordDialog");
const recordForm = document.querySelector("#recordForm");
const formFields = document.querySelector("#formFields");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMode = document.querySelector("#dialogMode");
const closeDialogBtn = document.querySelector("#closeDialogBtn");
const cancelDialogBtn = document.querySelector("#cancelDialogBtn");
const toast = document.querySelector("#toast");

function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneData(initialData);

    try {
        return { ...cloneData(initialData), ...JSON.parse(saved) };
    } catch {
        return cloneData(initialData);
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function icon(name) {
    return `<svg class="icon"><use href="#icon-${name}"></use></svg>`;
}

function formatCurrency(value) {
    const amount = Number(value || 0);
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0,
    }).format(amount);
}

function formatNumber(value) {
    return new Intl.NumberFormat("vi-VN").format(Number(value || 0));
}

function getLookupText(field, value) {
    const rows = state[field.table] || [];
    const match = rows.find((row) => String(row[field.value]) === String(value));
    if (!match) return value ? `#${value}` : "";
    if (field.table === "orders") {
        return `Đơn #${match.idDonHang}`;
    }
    return match[field.text];
}

function fieldForKey(def, key) {
    return def.fields.find((field) => field.key === key);
}

function valueForSearch(def, row) {
    return def.fields
        .map((field) => formatCellValue(field, row[field.key], true))
        .join(" ")
        .toLowerCase();
}

function formatCellValue(field, value, plain = false) {
    if (field.type === "currency") return plain ? String(Number(value || 0)) : formatCurrency(value);
    if (field.type === "lookup") return getLookupText(field, value);
    if (field.type === "number") return plain ? String(value ?? "") : formatNumber(value);
    return value ?? "";
}

function getRecordKey(def, row) {
    if (def.compositeKey) return def.compositeKey.map((key) => row[key]).join("|");
    return String(row[def.idField]);
}

function nextId(table, idField) {
    const max = state[table].reduce((value, row) => Math.max(value, Number(row[idField]) || 0), 0);
    return max + 1;
}

function recalcOrderTotals() {
    state.orders.forEach((order) => {
        order.TongTien = state.orderDetails
            .filter((detail) => Number(detail.idDonHang) === Number(order.idDonHang))
            .reduce((sum, detail) => sum + Number(detail.ThanhTien || 0), 0);
    });
}

function statusClass(status) {
    if (status === "Đã hoàn thành") return "done";
    if (status === "Chờ xử lý") return "pending";
    if (status === "Đã hủy") return "cancelled";
    return "";
}

function renderNav() {
    const items = Object.entries(tableDefs)
        .map(([key, def]) => {
            const isActive = key === currentView ? "is-active" : "";
            return `
        <button class="nav-item ${isActive}" type="button" data-view="${key}">
          ${icon(def.icon)}
          <span>${def.label}</span>
        </button>
      `;
        })
        .join("");

    navList.innerHTML = items;
}

function renderDashboard() {
    const revenue = state.orders
        .filter((order) => order.TrangThai !== "Đã hủy" && order.TrangThai !== "Chờ xử lý")
        .reduce((sum, order) => sum + Number(order.TongTien || 0), 0);

    const completed = state.orders.filter((order) => order.TrangThai === "Đã hoàn thành").length;
    const stock = state.products.reduce((sum, product) => sum + Number(product.SoLuongTon || 0), 0);
    const lowStock = state.products.filter((product) => Number(product.SoLuongTon || 0) <= 10).length;
    const bestSellers = getBestSellers();
    const recentOrders = [...state.orders]
        .sort((a, b) => Number(b.idDonHang) - Number(a.idDonHang))
        .slice(0, 5);
    dashboardView.innerHTML = `
    <div class="metric-grid">
      <article class="metric-card">
        <span>Doanh thu</span>
        <strong>${formatCurrency(revenue)}</strong>
        <small>${completed}/${state.orders.length} đơn hoàn thành</small>
      </article>
      <article class="metric-card">
        <span>Sản phẩm</span>
        <strong>${formatNumber(state.products.length)}</strong>
        <small>${formatNumber(stock)} đơn vị trong kho</small>
      </article>
      <article class="metric-card">
        <span>Khách hàng</span>
        <strong>${formatNumber(state.customers.length)}</strong>
        <small>${formatNumber(state.orders.length)} đơn hàng</small>
      </article>
      <article class="metric-card">
        <span>Số đơn hàng còn ít hàng</span>
        <strong>${formatNumber(lowStock)}</strong>
        <small>Ngưỡng kiểm tra: 10</small>
      </article>
    </div>

    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-head">
          <h3>Sản phẩm bán chạy</h3>
          <span>Theo số lượng</span>
        </div>
        <div class="bar-list">
          ${bestSellers.map(renderBestSeller).join("") || `<div class="empty-state">Chưa có chi tiết đơn hàng</div>`}
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h3>Đơn gần đây</h3>
          <span>${formatNumber(recentOrders.length)} mục</span>
        </div>
        <div class="recent-list">
          ${recentOrders.map(renderRecentOrder).join("") || `<div class="empty-state">Chưa có đơn hàng</div>`}
        </div>
      </section>
    </div>
  `;
}

function getBestSellers() {
    const totals = new Map();
    state.orderDetails.forEach((detail) => {
        const current = totals.get(detail.idSanPham) || 0;
        totals.set(detail.idSanPham, current + Number(detail.SoLuong || 0));
    });

    return [...totals.entries()]
        .map(([idSanPham, quantity]) => {
            const product = state.products.find((item) => Number(item.idSanPham) === Number(idSanPham));
            return {
                name: product ? product.TenSanPham : `#${idSanPham}`,
                quantity,
            };
        })
        .sort((a, b) => b.quantity - a.quantity);
}

function renderBestSeller(item) {
    const max = Math.max(...getBestSellers().map((row) => row.quantity), 1);
    const width = Math.max(8, Math.round((item.quantity / max) * 100));
    return `
    <div class="bar-row">
      <span>${escapeHtml(item.name)}</span>
      <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
      <strong>${formatNumber(item.quantity)}</strong>
    </div>
  `;
}

function renderRecentOrder(order) {
    const customer = state.customers.find((item) => Number(item.idKhachHang) === Number(order.idKhachHang));
    return `
    <div class="recent-item">
      <div>
        <strong>Đơn #${order.idDonHang} - ${escapeHtml(customer?.HoTen || "Khách lẻ")}</strong>
        <span>${order.NgayDat} - ${formatCurrency(order.TongTien)}</span>
      </div>
      <span class="status-pill ${statusClass(order.TrangThai)}">${order.TrangThai || "Chưa rõ"}</span>
    </div>
  `;
}

function renderTable() {
    const def = tableDefs[currentView];
    const query = searchInput.value.trim().toLowerCase();
    const status = statusFilter.value;
    const rows = (state[currentView] || []).filter((row) => {
        const matchesSearch = !query || valueForSearch(def, row).includes(query);
        const matchesStatus = currentView !== "orders" || !status || row.TrangThai === status;
        return matchesSearch && matchesStatus;
    });

    statusFilterWrap.classList.toggle("is-hidden", currentView !== "orders");
    addBtn.querySelector("span").textContent = `Thêm ${def.label.toLowerCase()}`;

    tableHead.innerHTML = `
    <tr>
      ${def.fields.map((field) => `<th>${field.label}</th>`).join("")}
      <th>Thao tác</th>
    </tr>
  `;

    tableBody.innerHTML = rows.map((row) => renderRow(def, row)).join("");
    emptyState.classList.toggle("is-hidden", rows.length > 0);
}

function renderRow(def, row) {
    const key = getRecordKey(def, row);
    return `
    <tr data-key="${escapeHtml(key)}">
      ${def.fields.map((field) => `<td>${renderCell(field, row[field.key])}</td>`).join("")}
      <td>
        <div class="row-actions">
          <button class="icon-button" type="button" data-action="edit" data-key="${escapeHtml(key)}" title="Sửa" aria-label="Sửa">
            ${icon("edit")}
          </button>
          <button class="icon-button danger-button" type="button" data-action="delete" data-key="${escapeHtml(key)}" title="Xóa" aria-label="Xóa">
            ${icon("trash")}
          </button>
        </div>
      </td>
    </tr>
  `;
}

function renderCell(field, value) {
    if (field.key === "TrangThai") {
        return `<span class="status-pill ${statusClass(value)}">${escapeHtml(value || "Chưa rõ")}</span>`;
    }
    const text = formatCellValue(field, value);
    const className = text ? "" : "cell-muted";
    return `<span class="${className}">${escapeHtml(text || "Trống")}</span>`;
}

function switchView(view) {
    currentView = view;
    editingRecord = null;
    viewTitle.textContent = tableDefs[view].label;
    searchInput.value = "";
    statusFilter.value = "";
    renderNav();

    if (view === "dashboard") {
        tableView.classList.add("is-hidden");
        dashboardView.classList.remove("is-hidden");
        renderDashboard();
    } else {
        dashboardView.classList.add("is-hidden");
        tableView.classList.remove("is-hidden");
        renderTable();
    }
}

function openRecordDialog(record = null) {
    const def = tableDefs[currentView];
    editingRecord = record ? cloneData(record) : null;
    dialogMode.textContent = record ? "Cập nhật" : "Thêm mới";
    dialogTitle.textContent = def.label;
    formFields.innerHTML = def.fields.map((field) => renderField(def, field, record)).join("");
    attachFormCalculations();
    dialog.showModal();
}

function renderField(def, field, record) {
    const isNew = !record;
    const value = record?.[field.key] ?? getDefaultValue(def, field);
    const required = field.required ? "required" : "";
    const readonly = field.readonly || (def.compositeKey && editingRecord && def.compositeKey.includes(field.key)) ? "disabled" : "";
    const full = field.full || field.type === "textarea" ? "full" : "";
    const note = field.readonly ? `<span class="field-note">Tự động tính</span>` : "";

    if (field.type === "textarea") {
        return `
      <div class="field ${full}">
        <label for="${field.key}">${field.label}</label>
        <textarea id="${field.key}" name="${field.key}" ${required} ${readonly}>${escapeHtml(value)}</textarea>
        ${note}
      </div>
    `;
    }

    if (field.type === "lookup") {
        const options = getLookupOptions(field, value);
        return `
      <div class="field ${full}">
        <label for="${field.key}">${field.label}</label>
        <select id="${field.key}" name="${field.key}" ${required} ${readonly} data-field="${field.key}">
          ${options}
        </select>
        ${note}
      </div>
    `;
    }

    if (field.type === "select") {
        return `
      <div class="field ${full}">
        <label for="${field.key}">${field.label}</label>
        <select id="${field.key}" name="${field.key}" ${required} ${readonly}>
          ${(field.options || []).map((option) => `<option value="${escapeHtml(option)}" ${String(value) === option ? "selected" : ""}>${option}</option>`).join("")}
        </select>
        ${note}
      </div>
    `;
    }

    const inputType = field.type === "currency" ? "number" : field.type;
    const step = field.type === "currency" ? "1000" : "1";
    const min = field.min !== undefined ? `min="${field.min}"` : "";

    return `
    <div class="field ${full}">
      <label for="${field.key}">${field.label}</label>
      <input id="${field.key}" name="${field.key}" type="${inputType}" value="${escapeHtml(value)}" ${required} ${readonly} ${min} step="${step}">
      ${note}
    </div>
  `;
}

function getDefaultValue(def, field) {
    if (field.readonly && def.idField === field.key) return nextId(currentView, def.idField);
    if (field.key === "NgayDat") return new Date().toISOString().slice(0, 10);
    if (field.key === "TrangThai") return "Chờ xử lý";
    if (field.key === "SoLuong") return 1;
    if (field.key === "DonGia" && currentView === "orderDetails") return state.products[0]?.DonGia ?? 0;
    if (field.key === "ThanhTien") return 0;
    if (field.type === "currency" || field.type === "number") return 0;
    return "";
}

function getLookupOptions(field, selected) {
    const rows = state[field.table] || [];
    const blank = field.required ? "" : `<option value="">Không chọn</option>`;
    return blank + rows
        .map((row) => {
            const value = row[field.value];
            const label = field.table === "orders" ? `Đơn #${row.idDonHang}` : row[field.text];
            return `<option value="${escapeHtml(value)}" ${String(selected) === String(value) ? "selected" : ""}>${escapeHtml(label)}</option>`;
        })
        .join("");
}

function attachFormCalculations() {
    if (currentView !== "orderDetails") return;

    const productSelect = recordForm.elements.idSanPham;
    const quantityInput = recordForm.elements.SoLuong;
    const priceInput = recordForm.elements.DonGia;
    const totalInput = recordForm.elements.ThanhTien;

    const syncTotal = () => {
        const quantity = Number(quantityInput.value || 0);
        const price = Number(priceInput.value || 0);
        totalInput.value = quantity * price;
    };

    productSelect?.addEventListener("change", () => {
        const product = state.products.find((item) => Number(item.idSanPham) === Number(productSelect.value));
        if (product) priceInput.value = product.DonGia;
        syncTotal();
    });

    quantityInput?.addEventListener("input", syncTotal);
    priceInput?.addEventListener("input", syncTotal);
    syncTotal();
}

function formDataToRecord(def) {
    const result = {};

    def.fields.forEach((field) => {
        const input = recordForm.elements[field.key];
        let value = input ? input.value : editingRecord?.[field.key];

        if (field.readonly && def.idField === field.key && !editingRecord) {
            value = nextId(currentView, def.idField);
        }

        if (field.type === "number" || field.type === "currency" || field.type === "lookup") {
            value = value === "" ? null : Number(value);
        }

        result[field.key] = value;
    });

    if (currentView === "orderDetails") {
        result.ThanhTien = Number(result.SoLuong || 0) * Number(result.DonGia || 0);
    }

    return result;
}

function saveRecord(event) {
    event.preventDefault();
    const def = tableDefs[currentView];
    const record = formDataToRecord(def);

    if (currentView === "orderDetails" && !isUniqueOrderDetail(record)) {
        showToast("Chi tiết đơn hàng này đã tồn tại.");
        return;
    }

    if (editingRecord) {
        const key = getRecordKey(def, editingRecord);
        const index = state[currentView].findIndex((row) => getRecordKey(def, row) === key);
        if (index >= 0) state[currentView][index] = record;
    } else {
        state[currentView].push(record);
    }

    recalcOrderTotals();
    saveState();
    dialog.close();
    renderAfterChange();
    showToast("Đã lưu dữ liệu.");
}

function isUniqueOrderDetail(record) {
    if (editingRecord) return true;
    return !state.orderDetails.some((row) => (
        Number(row.idDonHang) === Number(record.idDonHang) &&
        Number(row.idSanPham) === Number(record.idSanPham)
    ));
}

function renderAfterChange() {
    renderDashboard();
    if (currentView === "dashboard") {
        switchView("dashboard");
    } else {
        renderTable();
    }
}

function findRecordByKey(def, key) {
    return state[currentView].find((row) => getRecordKey(def, row) === key);
}

function deleteRecord(key) {
    const def = tableDefs[currentView];
    const record = findRecordByKey(def, key);
    if (!record) return;

    const blockedBy = getDeleteBlocker(currentView, record);
    if (blockedBy) {
        showToast(blockedBy);
        return;
    }

    const label = getDeleteLabel(currentView, record);
    if (!window.confirm(`Xóa ${label}?`)) return;

    state[currentView] = state[currentView].filter((row) => getRecordKey(def, row) !== key);
    recalcOrderTotals();
    saveState();
    renderAfterChange();
    showToast("Đã xóa dữ liệu.");
}

function getDeleteLabel(table, record) {
    if (table === "categories") return record.TenLoai;
    if (table === "products") return record.TenSanPham;
    if (table === "customers") return record.HoTen;
    if (table === "employees") return record.TenNhanVien;
    if (table === "orders") return `đơn #${record.idDonHang}`;
    return `chi tiết đơn #${record.idDonHang}`;
}

function getDeleteBlocker(table, record) {
    if (table === "categories" && state.products.some((row) => Number(row.idLoaiSP) === Number(record.idLoaiSP))) {
        return "Không thể xóa loại sản phẩm khi còn sản phẩm thuộc loại này.";
    }
    if (table === "products" && state.orderDetails.some((row) => Number(row.idSanPham) === Number(record.idSanPham))) {
        return "Không thể xóa sản phẩm đã nằm trong chi tiết đơn hàng.";
    }
    if (table === "customers" && state.orders.some((row) => Number(row.idKhachHang) === Number(record.idKhachHang))) {
        return "Không thể xóa khách hàng đã có đơn hàng liên quan.";
    }
    if (table === "employees" && state.orders.some((row) => Number(row.idNhanVien) === Number(record.idNhanVien))) {
        return "Không thể xóa nhân viên này khi còn đơn hàng liên quan.";
    }
    if (table === "orders" && state.orderDetails.some((row) => Number(row.idDonHang) === Number(record.idDonHang))) {
        return "Không thể xóa đơn hàng khi còn chi tiết đơn hàng liên quan.";
    }
    return "";
}

function resetData() {
    if (!window.confirm("Khôi phục dữ liệu mẫu ban đầu?")) return;
    state = cloneData(initialData);
    saveState();
    switchView("dashboard");
    showToast("Đã khôi phục dữ liệu mẫu.");
}



function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

navList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    switchView(button.dataset.view);
});

searchInput.addEventListener("input", renderTable);
statusFilter.addEventListener("change", renderTable);

addBtn.addEventListener("click", () => {
    openRecordDialog();
});

tableBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    const def = tableDefs[currentView];
    const record = findRecordByKey(def, button.dataset.key);

    if (button.dataset.action === "edit") openRecordDialog(record);
    if (button.dataset.action === "delete") deleteRecord(button.dataset.key);
});

recordForm.addEventListener("submit", saveRecord);
closeDialogBtn.addEventListener("click", () => dialog.close());
cancelDialogBtn.addEventListener("click", () => dialog.close());
resetBtn.addEventListener("click", resetData);

recalcOrderTotals();
saveState();
renderNav();
switchView("dashboard");
