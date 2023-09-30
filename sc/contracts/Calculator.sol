// SPDX-License-Identifier: UNLICENSE
pragma solidity 0.8.20;


/*
buat solidty dengan 4 function 
pengurangan, pertambhan, 
perkalian, perpangkatan dari 
2 input dan di store di global variabel
*/
contract Calculator {

    //define global variabel
    uint256 internal hasil_pengurangan;
    uint256 internal hasil_pertambahan;
    uint256 internal hasil_perkalian;
    uint256 internal hasil_perpangkatan;

    //4 function sederhana
    //pengurangan (write)
    function pengurangan(uint256 _a, uint256 _b) public {
        hasil_pengurangan = _a - _b;
    }

    //baca hasil (read)
    function readHasilPengurangan() public view returns (uint256){
        return hasil_pengurangan;
    }

    //pertambahan (write)
    function pertambahan(uint256 _a, uint256 _b) public {
        hasil_pertambahan = _a + _b;
    }
    
    //baca hasil (read)
    function readHasilPertambahan() public view returns (uint256){
        return hasil_pertambahan;
    }

    //perkalian (write)
    function perkalian(uint256 _a, uint256 _b) public {
        hasil_perkalian = _a * _b;
    }

    //baca hasil (read)
    function readHasilPerkalian() public view returns (uint256){
        return hasil_perkalian;
    }

    //perpangkatan (write)
    function perpangkatan(uint256 _a, uint256 _b) public {
        hasil_perpangkatan = _a ** _b;
    }

    //baca hasil (read)
    function readHasilPerpangkatan() public view returns (uint256){
        return hasil_perpangkatan;
    }
}