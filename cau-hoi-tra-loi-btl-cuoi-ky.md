# Cau Hoi Va Cach Tra Loi Bao Ve Bai Cuoi Ky

## Gioi thieu ngan

File nay tong hop cac cau hoi ma giang vien co the hoi khi bao ve bai quan ly shop do uong bang HTML, CSS va JavaScript, kem cau tra loi goi y de tra loi ro rang, thuyet phuc.

---

## 1. Bai nay quan ly nhung doi tuong nao?

**Tra loi:**

Bai quan ly shop do uong gom cac doi tuong chinh: loai san pham, san pham, khach hang, nhan vien, don hang va chi tiet don hang. Cac doi tuong nay co quan he voi nhau. Vi du, san pham thuoc mot loai san pham, don hang thuoc ve mot khach hang va mot nhan vien, con chi tiet don hang lien ket don hang voi san pham.

---

## 2. Tai sao lai tach don hang va chi tiet don hang?

**Tra loi:**

Vi mot don hang co the gom nhieu san pham. Neu luu tat ca trong mot bang thi du lieu se bi lap va kho quan ly. Viec tach thanh `DON_HANG` va `CHI_TIET_DON_HANG` giup du lieu ro rang hon: `DON_HANG` luu thong tin chung cua don, con `CHI_TIET_DON_HANG` luu tung san pham, so luong, don gia va thanh tien.

---

## 3. Du lieu trong bai duoc luu o dau? Co phai co so du lieu that khong?

**Tra loi:**

Du lieu hien tai duoc luu trong `localStorage` cua trinh duyet. Day chua phai la co so du lieu that nhu MySQL. Em dung `localStorage` de mo phong viec them, sua, xoa va luu du lieu tren giao dien frontend. Neu trien khai thuc te thi can co backend va database rieng.

---

## 4. Vi sao dung localStorage ma khong chi dung mang JavaScript?

**Tra loi:**

Neu chi dung mang JavaScript thi khi tai lai trang, du lieu se mat. `localStorage` giup luu lai du lieu tren trinh duyet, nen sau khi nguoi dung them, sua, xoa roi refresh trang thi du lieu van con.

---

## 5. Dashboard tinh doanh thu nhu the nao?

**Tra loi:**

Dashboard tinh doanh thu bang cach cong tong tien cua cac don hang co trang thai "Da hoan thanh". Cac don "Cho xu ly" hoac "Da huy" khong duoc tinh vao doanh thu, vi chung chua tao ra doanh thu thuc te.

---

## 6. Tong tien don hang duoc tinh tu dong hay nhap tay?

**Tra loi:**

Tong tien don hang duoc tinh lai tu chi tiet don hang. Moi dong chi tiet co `ThanhTien = SoLuong * DonGia`. Sau do chuong trinh cong tat ca thanh tien cua cac chi tiet thuoc cung mot don de cap nhat `TongTien` cua don hang.

---

## 7. Neu sua so luong trong chi tiet don hang thi tong tien co cap nhat khong?

**Tra loi:**

Co. Khi them hoac sua chi tiet don hang, chuong trinh tinh lai `ThanhTien`, sau do goi ham tinh lai tong tien cua cac don hang. Nhu vay tong tien luon duoc cap nhat theo du lieu chi tiet.

---

## 8. Lam sao chuong trinh biet truong nao la text, number, select hay lookup?

**Tra loi:**

Chuong trinh dung doi tuong cau hinh `tableDefs`. Trong do moi bang co danh sach cac truong, moi truong co `key`, `label`, `type`, `required`, `readonly` hoac thong tin lookup. Dua vao cau hinh nay, chuong trinh tu tao bang hien thi va form them sua.

---

## 9. Uu diem cua cach dung tableDefs la gi?

**Tra loi:**

Uu diem la giam lap code. Thay vi viet rieng giao dien cho tung bang, chuong trinh chi can doc cau hinh trong `tableDefs` de tu render menu, bang du lieu, form them sua va cac truong nhap lieu. Neu muon them bang hoac sua truong, chi can sua cau hinh la chinh.

---

## 10. Lookup trong bai dung de lam gi?

**Tra loi:**

Lookup dung de hien thi va chon du lieu lien ket giua cac bang. Vi du, san pham co `idLoaiSP`, nhung tren giao dien co the hien thi ten loai san pham de nguoi dung de hieu hon. Don hang cung co lookup den khach hang va nhan vien.

---

## 11. Tai sao khi xoa loai san pham dang co san pham thi chuong trinh khong cho xoa?

**Tra loi:**

Vi do la rang buoc toan ven du lieu. Neu xoa loai san pham trong khi van con san pham thuoc loai do, san pham se bi mat lien ket. Chuong trinh kiem tra truoc khi xoa de tranh tao ra du lieu bi loi hoac du lieu mo coi.

---

## 12. Khoa chinh cua bang chi tiet don hang la gi?

**Tra loi:**

Khoa chinh cua bang chi tiet don hang la khoa ghep gom `idDonHang` va `idSanPham`. Dieu nay co nghia la trong cung mot don hang, mot san pham chi nen xuat hien mot lan.

---

## 13. Neu nguoi dung them trung san pham trong cung mot don hang thi sao?

**Tra loi:**

Chuong trinh co kiem tra trung chi tiet don hang. Neu cung `idDonHang` va `idSanPham` da ton tai, chuong trinh se khong cho them moi. Cach nay giup giu dung y nghia cua khoa chinh ghep.

---

## 14. Diem yeu hien tai cua du lieu mau la gi?

**Tra loi:**

Du lieu mau hien tai co mot diem can sua: mot so san pham dang bi trung `idSanPham = 17`, vi du Pepsi, 7-up va Sprite. Trong thuc te, khoa chinh khong duoc trung. Neu trung khoa chinh se gay sai khi lookup, sua, xoa hoac tinh chi tiet don hang. Cach khac phuc la doi thanh cac ma rieng, vi du 17, 18, 19.

---

## 15. Co chi tiet don hang nao tham chieu den don hang khong ton tai khong?

**Tra loi:**

Co the co truong hop chi tiet don hang co `idDonHang = 10` nhung bang don hang khong co don so 10. Day la loi toan ven khoa ngoai trong du lieu mau. Neu dung database that voi foreign key thi he quan tri co so du lieu se khong cho luu du lieu sai nhu vay.

---

## 16. Vi sao giao dien co tim kiem? Tim kiem hoat dong the nao?

**Tra loi:**

Tinh nang tim kiem giup nguoi dung loc nhanh ban ghi trong bang hien tai. Chuong trinh lay cac gia tri trong tung dong, ghep thanh chuoi, chuyen ve chu thuong, roi kiem tra xem chuoi do co chua tu khoa nguoi dung nhap hay khong.

---

## 17. Tai sao chi bang don hang co bo loc trang thai?

**Tra loi:**

Vi trang thai la thuoc tinh dac trung cua don hang, gom cac gia tri nhu "Da hoan thanh", "Cho xu ly", "Da huy". Cac bang nhu khach hang, nhan vien, san pham khong co truong trang thai nen khong can bo loc nay.

---

## 18. Ham escapeHtml dung de lam gi?

**Tra loi:**

Ham `escapeHtml` dung de chuyen cac ky tu dac biet trong noi dung nguoi dung nhap thanh dang an toan truoc khi chen vao HTML. Vi du, neu nguoi dung nhap ma HTML hoac script, ham nay giup giam nguy co loi giao dien va tan cong XSS.

---

## 19. App nay da bao mat hoan toan chua?

**Tra loi:**

Chua hoan toan. Day la ung dung frontend mo phong, nen du lieu nam trong trinh duyet va nguoi dung co the thay doi bang DevTools. Neu lam he thong thuc te thi can co backend, dang nhap, phan quyen, kiem tra du lieu phia server va database co rang buoc khoa chinh, khoa ngoai.

---

## 20. Tai sao khong dung MySQL truc tiep tu HTML va JavaScript?

**Tra loi:**

HTML, CSS va JavaScript chay tren trinh duyet khong nen ket noi truc tiep MySQL, vi nhu vay se lo thong tin tai khoan database va khong an toan. Cach dung dung la frontend goi API, backend xu ly logic va backend moi ket noi den MySQL.

---

## 21. Tai sao can nut khoi phuc du lieu mau?

**Tra loi:**

Nut khoi phuc du lieu mau giup dua du lieu ve trang thai ban dau. Trong qua trinh demo, nguoi dung co the them, sua, xoa nhieu ban ghi. Khi can trinh bay lai tu dau hoac kiem thu lai, nut nay giup khoi phuc nhanh.

---

## 22. San pham ban chay dang tinh theo don nao? Co tinh don da huy khong?

**Tra loi:**

Hien tai phan san pham ban chay dang cong theo tat ca chi tiet don hang. Neu muon chinh xac hon ve mat doanh thu thuc te, nen chi tinh cac chi tiet thuoc don hang co trang thai "Da hoan thanh". Day la mot diem co the cai tien.

---

## 23. "So don hang con it hang" co dung ten khong?

**Tra loi:**

Ten nay chua that chinh xac. Code dang dem so san pham co so luong ton kho thap, khong phai so don hang. Nen doi ten thanh "San pham sap het hang" hoac "San pham ton kho thap" de dung voi y nghia cua chi so.

---

## 24. Ham xuat SQL co hoat dong khong?

**Tra loi:**

Trong code co ham `generateSql()`, nhung giao dien hien tai chua co nut goi ham nay. Ngoai ra ham nay co dung `sqlValue()`, nen can dam bao da dinh nghia ham `sqlValue()`. Neu chua co thi phai bo sung ham chuyen gia tri JavaScript sang chuoi SQL an toan.

---

## 25. Lam sao de nang cap bai nay thanh he thong thuc te?

**Tra loi:**

Em se tach thanh ba phan: frontend, backend va database. Frontend giu giao dien quan ly, backend viet API cho cac chuc nang them, sua, xoa, tim kiem, con MySQL luu du lieu that voi khoa chinh, khoa ngoai va cac rang buoc du lieu. Nhu vay he thong se an toan va dung voi mo hinh thuc te hon.

---

## Cau tra loi chot khi bi hoi kho

**Tra loi goi y:**

Bai cua em la ung dung mo phong he thong quan ly shop do uong bang HTML, CSS va JavaScript thuan. Diem chinh cua bai la to chuc du lieu theo nhieu bang co quan he, co CRUD, tim kiem, loc, lookup khoa ngoai, tinh tong tien va luu du lieu bang `localStorage`.

Em cung nhan ra mot so han che nhu du lieu mau con trung khoa san pham, co chi tiet don tham chieu chua chat, va chua co backend hoac database that. Neu phat trien tiep, em se sua du lieu mau, them validate day du hon va ket noi API voi MySQL de dam bao toan ven du lieu.
