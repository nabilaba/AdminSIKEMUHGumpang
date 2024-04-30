import { Box, Stack, Image } from "@chakra-ui/react";
import BoxAnggota from "./BoxAnggota";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Hero from "./Hero";
import Pagination from "./Pagination";

export default function Home() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const limit = 5;

  const getData = async () => {
    setTotalPage(Math.ceil(dummy.length / limit));
    setData(dummy?.slice((page - 1) * limit, page * limit));
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = dummy?.filter(
    (item) =>
      item.nama.toLowerCase().includes(filter.toLowerCase()) ||
      item.nbm.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    setTotalPage(Math.ceil(filteredData.length / limit));
    setData(filteredData?.slice((page - 1) * limit, page * limit));
  }, [page, filter]);

  return (
    <>
      <Stack spacing="4" zIndex="2">
        <Hero />
        <Search setFilter={setFilter} />
        <BoxAnggota data={data} />
        {totalPage > 1 && (
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        )}
        <Footer />
      </Stack>
    </>
  );
}

const dummy = [
  {
    id: 1,
    nama: "Nabil Aziz Bima Anggita",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/nabil.jpg",
  },
  {
    id: 2,
    nama: "Dewi Khoirunnisa",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/dewi.jpg",
  },
  {
    id: 3,
    nama: "Anggota 2",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 4,
    nama: "Anggota 3",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
  {
    id: 5,
    nama: "Anggota 4",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 6,
    nama: "Anggota 5",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
  {
    id: 7,
    nama: "Anggota 6",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 8,
    nama: "Anggota 7",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
  {
    id: 9,
    nama: "Anggota 8",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Sukoharjo",
    jabatan: "Ketua Pimpinan",
    foto: "/assets/default.jpg",
  },
  {
    id: 10,
    nama: "Anggota 9",
    nbm: "1234567890",
    profesi: "Dosen, Pengusaha",
    pendidikan: "S1",
    alamat: "Tawangmangu",
    jabatan: "Anggota",
    foto: "/assets/default.jpg",
  },
];
